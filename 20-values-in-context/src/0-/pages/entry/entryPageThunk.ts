import axios, { AxiosResponse } from "axios";
import { Dispatch } from "react";
import { BASE_URL } from "../../constants/api";
import { EntryPageActions, EntryPageState } from "./EntryPageContext";
import type { EntryOptionItem } from "./types";

export const entryPageThunk = async (
  dispatch: Dispatch<EntryPageActions>,
  state: EntryPageState
) => {
  const fetchScoops = async () => {
    const scoopsResult: AxiosResponse<EntryOptionItem[]> = await axios.get(
      `${BASE_URL}/scoops`
    );
    const { data: scoopsData } = scoopsResult;
    dispatch({ type: "LOAD_SCOOPS_OPTIONS", payload: scoopsData });
  };
  const fetchToppings = async () => {
    const toppingsResult: AxiosResponse<EntryOptionItem[]> = await axios.get(
      `${BASE_URL}/toppings`
    );
    const { data: toppingsData } = toppingsResult;
    dispatch({ type: "LOAD_TOPPINGS_OPTIONS", payload: toppingsData });
  };

  try {
    await Promise.all([fetchScoops(), fetchToppings()]);
  } catch (err) {
    dispatch({ type: "OPTIONS_HAS_ERROR" });
  }
};
