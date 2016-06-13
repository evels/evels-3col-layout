window.datastore = {
  getNewsSummaries: function() {
    return this.newsSummaries;
  },

  getJson: function() {
    return this.json;
  },

  newsSummaries: {
    "Articles": [
        {
          "ArticleId" : 123,
          "ThumbnailImageId" :'https://placeimg.com/300/192/animals',
          "Category" : 'Animal Football',
          "Title" : 'Bellevue football boosters prepare to file lawsuits in ongoing scandal',
          "Body" : 'In a note to supporters over the weekend, Bellevue booster club president John Conners said he saw litigation as an option that would the team with due process.',
        },
        {
          "ArticleId": 124,
          "ThumbnailImageId":'https://placeimg.com/300/192/architecture',
          "Category": 'Editorial',
          "Title": 'Trump\'s reckless disregard of the Constitution',
          "Body": 'Donald Trump\'s xenophobic attack on a federal judge tears at a fabric of democracy.',
        },
        {
          "ArticleId": 125,
          "ThumbnailImageId":'https://placeimg.com/300/192/people',
          "Category": 'Music',
          "Title": 'Capitol Hill Block Party announces full lineup',
          "Body": 'The popular celebration, in its 20th year, will be held July 22-24. In addition to the festival site, shows also will be at Unicorn and Chop House Row. Tickets are on sale today.',
          updated: '9:48 am',
        },
      ]
  },

  json: {
    "Articles": [
      {
        "ArticleId": "23",
        "Title": "\"This is my Article\"",
        "PlaceholderImageID": "1234",
        "ThumbnailImageId": "432",
        "ArticleType": "Article",
        "Category": "Politics",
        "Author": "\"John Doe\"",
        "Body": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu lacus vel sem egestas efficitur. Mauris feugiat ex dui, et mattis nibh tempor id. Aenean ut tincidunt turpis, a gravida nunc. Donec quis lacinia ante, quis tincidunt eros. Fusce gravida congue elit nec feugiat. Nulla facilisi. Sed in lorem et augue condimentum ultricies non et leo. Etiam gravida id erat ac semper.\""
      },
      {
        "ArticleId": "22",
        "Title": "\"This is my Article 2\"",
        "PlaceholderImageID": "2352",
        "ThumbnailImageId": "346346",
        "ArticleType": "Gallery",
        "Category": "Politics",
        "Author": "\"Sarah Doe\"",
        "Body": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu lacus vel sem egestas efficitur. Mauris feugiat ex dui, et mattis nibh tempor id. Aenean ut tincidunt turpis, a gravida nunc. Donec quis lacinia ante, quis tincidunt eros. Fusce gravida congue elit nec feugiat. Nulla facilisi. Sed in lorem et augue condimentum ultricies non et leo. Etiam gravida id erat ac semper.\""
      },
      {
        "ArticleId": "27",
        "Title": "\"This is my Article 3\"",
        "PlaceholderImageID": "6756",
        "ThumbnailImageId": "1234563",
        "ArticleType": "Gallery",
        "Category": "News",
        "Author": "\"Jane Doe\"",
        "Body": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu lacus vel sem egestas efficitur. Mauris feugiat ex dui, et mattis nibh tempor id. Aenean ut tincidunt turpis, a gravida nunc. Donec quis lacinia ante, quis tincidunt eros. Fusce gravida congue elit nec feugiat. Nulla facilisi. Sed in lorem et augue condimentum ultricies non et leo. Etiam gravida id erat ac semper.\""
      }
    ]
  }
}
