

function formatString(input: string, toUpper?: boolean):string {
  if (toUpper===false) {
    return  input.toLowerCase();
  } else {
   return input.toUpperCase();
  }
}


function filterByRating(items: { title: string; rating: number }[]) {
  const filteredValue = items.filter((item) => item.rating>4||item.rating===4)
  return filteredValue
}


