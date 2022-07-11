const search = instantsearch({
    appId: 'DMULMGXMIW',
    apiKey: '1557af379b5d5e7843964b99bc94d71b',
    indexName: 'test_index1',
});



search.addWidget(
    instantsearch.widgets.searchBox({
        container: '#search-input',
    })
);
search.addWidget(
    instantsearch.widgets.hits({
        container: '#hits',
        hitsPerPage: 10,
        templates: {
            item: document.getElementById('hit-template').innerHTML,
            empty: "Sorry, we didn't find any results for the search <em> \"{{query}}\"</em>"
        }
    })
);

search.addWidget(
    instantsearch.widgets.refinementList({
        container: '#rating',
        attributeName: 'rating'
    })
);
search.addWidget(
    instantsearch.widgets.refinementList({
        container: '#free_shipping',
        attributeName: 'free_shipping'
    })
);
search.addWidget(
    instantsearch.widgets.refinementList({
        container: '#price_range',
        attributeName: 'price_range'
    })
);

search.start();
