# Pagination
Create pagination items model

Quickly create pagination items via vanilla javascript and no dependency required.

## Usage
```javascript
import createPagination from './Pagination';
```

## Will return an array of pagination items and each item is an object with *type* and *page* property.
```javascript
/*
  createPagination(current, limit, total, [visibleNeighbors = 2])
*/
const items = createPagination(2, 5, 27);

// [{type: "prev", page: 1}, {type: "anchor", page: 1}, {type: "anchor", page: 2}, {type: "anchor", page: 3}, {type: "anchor", page: 4}, {type: "gap"}, {type: "last", page: 6}, {type: "next", page: 3}] (8)
```

## Item Type
Item type could be one of this below:
* prev
* first
* anchor
* last
* next
* gap