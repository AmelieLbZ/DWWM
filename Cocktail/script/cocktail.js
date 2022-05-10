// ar requestOptions = {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin", requestOptions)
        .then(response => response.json())
        .then(result => {console.log(result)
        createList(result);
        })
        .catch(error => console.log('error', error));

