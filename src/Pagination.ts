interface PaginationItem {
  type: string,
  page?: number
}

export default (
  current: number,
    limit: number,
      total: number,
        visibleNeighbors: number = 2) => {

  let items: Array<PaginationItem> = [];
  const pages = Math.ceil(total / limit);

  /*
    Prev
  */
  if(current > 1)
  {
    items.push({type: 'prev', page: current -1});
  }

  /*
    Pages
  */
  const pageStart = Math.max(1, current - visibleNeighbors),
        pageEnd   = Math.min(pages, current + visibleNeighbors);

  for(let index = pageStart; index <= pageEnd; index ++)
  {
    /*
      Gap
    */
    if(index === pageStart && index - 1 > 1)
    {
      items.push({type: 'first', page: 1});
      items.push({type: 'gap'});
    }

    /*
      Anchor
    */
    items.push({type: 'anchor', page: index});

    /*
      Gap
    */
    if(index === pageEnd && pages - index > 1)
    {
      items.push({type: 'gap'});
      items.push({type: 'last', page: pages});
    }
  }

  /*
    Next
  */
  if(current < pages)
  {
    items.push({type: 'next', page: current +1});
  }

  return items;
}
