import { supabase } from "../lib/supabaseClient";

export async function saveDateRequest({
  selectedDate,
  selectedTime,
  selectedFood,
}) {
  const { error } = await supabase.from("date_requests").insert({
    selected_date: selectedDate,
    selected_time: selectedTime,
    selected_food: selectedFood,
  });

  if (error) {
    throw new Error(error.message);
  }

  const { error: functionError } = await supabase.functions.invoke(
    "notify-date-request",
    {
      body: {
        selectedDate,
        selectedTime,
        selectedFood,
      },
    }
  );

  if (functionError) {
    throw new Error(functionError.message);
  }
}