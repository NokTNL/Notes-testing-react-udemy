import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/api";
import { ItemType } from "../../models/dataTypes";
import { ScoopOption } from "./ScoopOption";
import styled from "styled-components";
import { ToppingOption } from "./ToppingOption";

type OptionsProptype = {
  optionType: string;
};

type OptionCount = {
  name: string;
  count: number;
};

const OptionCompContainer = styled.ul`
  display: flex;
  gap: 20px;
`;

export const Options = ({ optionType }: OptionsProptype) => {
  const [items, setItems] = useState<ItemType[]>([]);
  const [hasErr, setErr] = useState(false);
  const [totalOptionCounts, setTotalOptionCounts] = useState<OptionCount[]>([]);

  useEffect(() => {
    // This server call will be replaced by our msw when running test because of the settings in `setupTests.ts`
    axios
      .get(`${BASE_URL}/${optionType}`)
      .then((res: AxiosResponse<ItemType[]>) => {
        setItems(res.data);
        setTotalOptionCounts(
          res.data.map((item) => ({ name: item.name, count: 0 }))
        );
      })
      .catch((error) => {
        if (error instanceof Error) {
          setErr(true);
        } else {
          throw error;
        }
      });
  }, []);

  const handleOptionCountChange = (targetName: string, newCount: number) => {
    setTotalOptionCounts((prevCounts) =>
      prevCounts.map((option) =>
        option.name === targetName
          ? { name: option.name, count: newCount }
          : option
      )
    );
  };

  const OptionComp =
    optionType === "scoops"
      ? ScoopOption
      : optionType === "toppings"
      ? ToppingOption
      : null;

  return hasErr ? (
    // Note that text inside <div> is NOT accessible as the "name"
    <div role="alert">An unexpected alert error. Please try again later.</div>
  ) : (
    <div>
      {/* 🤯 the below shoudl change according to different types of options! */}
      <p>$2.00 each</p>
      {/* 🤯 the below shoudl change according to different types of options! */}
      <p>
        Scoops total: $
        {(
          totalOptionCounts.reduce(
            (total, optionCount) => total + optionCount.count,
            0
          ) * 2
        ).toFixed(2)}
      </p>
      <OptionCompContainer>
        {items.map(
          (item) =>
            OptionComp && (
              <OptionComp
                key={item.name}
                item={item}
                count={
                  totalOptionCounts.find((option) => option.name === item.name)
                    ?.count ?? 0
                }
                handleOptionCountChange={handleOptionCountChange}
              />
            )
        )}
      </OptionCompContainer>
    </div>
  );
};
