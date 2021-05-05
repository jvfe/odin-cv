function handleDates(item) {
  const fromYear =
    item.fromDate !== "" ? new Date(item.fromDate).getFullYear() : "";
  const toYear =
    item.toDate !== "" ? new Date(item.toDate).getFullYear() : "ongoing";

  return { fromYear, toYear };
}

export { handleDates };
