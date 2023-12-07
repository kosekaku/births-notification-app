export const paginationCalculation = <T,>( // generic function for page data items
  data: T[],
  itemsPerPage: number,
  itemsCurrentPage: number
) => {
  const totalItems = data.length;
  const totalItemsPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = itemsCurrentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPageItems = data?.slice(indexOfFirstItem, indexOfLastItem);
  return { currentPageItems, totalItemsPages, totalItems };
};
