import React, { Component } from "react";
import NewsItem from "./NewsItem";
export class News extends Component {
  articles = [
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Judge rules Musk's tweets over taking Tesla private were false, investors say - Reuters",
      description:
        'A federal judge has ruled that Tesla <a href="https://www.reuters.com/companies/TSLA.O" target="_blank">(TSLA.O)</a> CEO Elon Musk\'s 2018 tweets about having secured financing to take the company private were false, according to court filings by Tesla investo…',
      url: "https://www.reuters.com/business/autos-transportation/judge-rules-musks-tweets-over-taking-tesla-private-were-false-investors-say-2022-04-16/",
      urlToImage:
        "https://www.reuters.com/resizer/Q5XHo2QqfVH1FPc_6Ef0eRAKqNo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JC6D3Z6OS5PJNNZXJCB3JVXO2Q.jpg",
      publishedAt: "2022-04-16T23:08:00Z",
      content:
        "SAN FRANCISCO, April 16 (Reuters) - A federal judge has ruled that Tesla (TSLA.O) CEO Elon Musk's 2018 tweets about having secured financing to take the company private were false, according to court… [+2105 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Jasper Jolly",
      title:
        "Forget Twitter: Elon Musk has his hands full keeping Tesla on the road - The Guardian",
      description:
        "The firm is doing well, but it will have perform amazingly to merit its position as the world’s most valuable carmaker",
      url: "https://amp.theguardian.com/technology/2022/apr/17/twitter-musk-hands-full-keeping-tesla-1tn-magic-alive",
      urlToImage: null,
      publishedAt: "2022-04-16T23:05:00Z",
      content:
        "Observer business agendaThe firm is doing well, but it will have perform amazingly to merit its position as the worlds most valuable carmaker\r\nSpare a brief thought for Elon Musks bankers and lawyers… [+3935 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Smerconish has a message for conservatives rallying behind Elon Musk - CNN",
      description: null,
      url: "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dkj2u8DKXZbY",
      urlToImage: null,
      publishedAt: "2022-04-16T23:00:20Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "Dow Jones Futures: Market Rally Keeps Sliding; Tesla Shanghai Eyes Restart, Twitter OKs Poison Pill Vs. Musk - Investor's Business Daily",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMijwFodHRwczovL3d3dy5pbnZlc3RvcnMuY29tL21hcmtldC10cmVuZC9zdG9jay1tYXJrZXQtdG9kYXkvZG93LWpvbmVzLWZ1dHVyZXMtbWFya2V0LXJhbGx5LWtlZXBzLXNsaWRpbmctNS1zdG9ja3MtbmVhci1idXktcG9pbnRzLXRlc2xhLWVhcm5pbmdzL9IBAA?oc=5",
      urlToImage: null,
      publishedAt: "2022-04-16T22:39:00Z",
      content: null,
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "Dee-ann Durbin",
      title:
        "FDA investigating Lucky Charms after reports of illness - The Associated Press",
      description:
        "The U.S. Food and Drug Administration is investigating Lucky Charms cereal after dozens of customers complained of illness after eating it. The FDA said Saturday it has received more than 100 complaints related to Lucky Charms so far this year.",
      url: "https://apnews.com/755cdcfaf6cbca9129c5291ef2e49889",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/d2e7e5bf428645d291f52877ded6f81e/3000.jpeg",
      publishedAt: "2022-04-16T22:30:11Z",
      content:
        "The U.S. Food and Drug Administration is investigating Lucky Charms cereal after dozens of customers complained of illness after eating it.\r\nThe FDA said Saturday it has received more than 100 compla… [+719 chars]",
    },
    {
      source: {
        id: null,
        name: "FreightWaves",
      },
      author: "Eric Kulisch",
      title: "Get ready for the next supply chain shockwave - FreightWaves",
      description:
        "(Updated April 16, 2022, 5:55 P.M. ET) Concern is growing that the spread of COVID cases and city lockdowns in China will have massive downstream effects for global supply chains that could dwarf prev",
      url: "https://www.freightwaves.com/news/get-ready-for-the-next-supply-chain-shockwave",
      urlToImage:
        "https://s29755.pcdn.co/wp-content/uploads/2022/04/Shanghai-Shock_1-1200x675.jpg",
      publishedAt: "2022-04-16T21:55:00Z",
      content:
        "(Updated April 16, 2022, 5:55 P.M. ET)\r\nConcern is growing that the spread of COVID cases and city lockdowns in China will have massive downstream effects for global supply chains that could dwarf pr… [+12952 chars]",
    },
    {
      source: {
        id: null,
        name: "TheBlaze",
      },
      author: "Samuel Mangold-Lenett",
      title: "Amazon is adding a 'fuel and inflation surcharge' - TheBlaze",
      description:
        "This past Wednesday, Amazon announced that for the first time in the company’s history, it will be charging sellers a “5% fuel and inflation surcharge.”According to CNN Business, the new fee is being imposed because “inflation has worsened significantly in re…",
      url: "https://www.theblaze.com/news/amazon-is-adding-a-fuel-and-inflation-surcharge",
      urlToImage:
        "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yOTY4OTI2NC9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTcxMjQzNzYxM30.9EorBAessGwze2rETpc1s1x_b6fTCaBB7Tm1W1bqaso/img.jpg?width=1200&coordinates=0%2C0%2C0%2C64&height=600",
      publishedAt: "2022-04-16T21:10:06Z",
      content:
        "This past Wednesday, Amazon announced that for the first time in the companys history, it will be charging sellers a 5% fuel and inflation surcharge.\r\nAccording to CNN Business, the new fee is being … [+2518 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Inti Pacheco",
      title:
        "Meet the Twitter Army of Elon Musk Superfans - The Wall Street Journal",
      description:
        "Thousands of people reach out to the Tesla CEO almost every day hoping to get a response. His attention usually goes to a few prominent supporters on his feed.",
      url: "https://www.wsj.com/articles/meet-the-twitter-army-of-elon-musk-superfans-11650137427",
      urlToImage: "https://images.wsj.net/im-525965/social",
      publishedAt: "2022-04-16T19:30:00Z",
      content:
        "Elon Musk might have more than 82 million Twitter followers, but only a handful of those can consistently grab the billionaires attention and rally Tesla Inc.s social-media army.\r\nAmong the few: a so… [+203 chars]",
    },
    {
      source: {
        id: null,
        name: "ZyCrypto",
      },
      author: null,
      title:
        "Prominent Crypto Pundit Sees Shiba Inu Rocketing To $0.001 — But $1 Ridiculously Unlikely - ZyCrypto",
      description:
        "David Gokhshtein, the founder of distributed data network PAC Protocol and former Republican congressional candidate says the popular",
      url: "https://zycrypto.com/prominent-crypto-pundit-sees-shiba-inu-blasting-to-0-001-but-1-ridiculously-unlikely/",
      urlToImage:
        "https://zycrypto.com/wp-content/uploads/2021/11/Dogecoin-Founder-Billy-Markus-Tells-Us-Why-He-Loathes-Shiba-Inu.jpg",
      publishedAt: "2022-04-16T19:15:36Z",
      content:
        "David Gokhshtein, the founder of distributed data network PAC Protocol and former Republican congressional candidate says the popular meme coin Shiba Inu (SHIB) has a chance of hitting $0.001 but not… [+1929 chars]",
    },
    {
      source: {
        id: null,
        name: "MarketWatch",
      },
      author: "William Watts",
      title:
        "Recession fears and the stock market --- Is it too late to play defense? - MarketWatch",
      description:
        "Defensive sectors not overextended if macro backdrop remains volatile: DataTrek’s Colas",
      url: "https://www.marketwatch.com/story/recession-fears-and-the-stock-market-is-it-too-late-to-play-defense-11650058747",
      urlToImage: "https://images.mktw.net/im-526082/social",
      publishedAt: "2022-04-16T18:25:00Z",
      content:
        "Recession fears are on the rise as the Federal Reserve gears up to fight inflation. Many stock-market investors are already playing defense and may wonder if those strategies have more room to run.Bu… [+5490 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Jeff Sommer",
      title:
        "Inflation, Pandemic and War? The Markets Have Priced That In. - The New York Times",
      description:
        "Stocks, bonds and commodities are already pricing in inflation, the pandemic and war.",
      url: "https://www.nytimes.com/2022/04/16/business/economy-inflation-war-covid.html",
      urlToImage:
        "https://static01.nyt.com/images/2022/04/17/business/17Strategies-illo/17Strategies-illo-facebookJumbo.jpg",
      publishedAt: "2022-04-16T17:16:21Z",
      content:
        "Because inflation began to surge 12 months ago, the year-over-year comparisons will be more favorable this spring. Furthermore, two of the causes of current inflation expansive financial conditions a… [+1883 chars]",
    },
    {
      source: {
        id: null,
        name: "Decrypt",
      },
      author: "Tim Hakki",
      title:
        "This Week in Coins: Market Leaders Dip as Bitcoin Struggles to Maintain 40K - Decrypt",
      description:
        "Potential regulatory approvals and institutional adoptions slowed, as did losses for most major coins.",
      url: "https://decrypt.co/98012/this-week-in-coins-market-leaders-dip-as-bitcoin-struggles-to-maintain-40k",
      urlToImage:
        "https://cdn.decrypt.co/resize/1024/height/512/wp-content/uploads/2021/10/bitcoin-etf-trading-volume-gID_1.jpeg",
      publishedAt: "2022-04-16T16:06:15Z",
      content:
        "This week in coins. Illustration by Mitchell Preffer for Decrypt.\r\nGenerally speaking, most leading cryptocurrencies dipped over the last seven days, but the losses werent as severe as the previous w… [+2799 chars]",
    },
    {
      source: {
        id: null,
        name: "MarketWatch",
      },
      author: "Jacob Passy",
      title:
        "The U.S. city where property taxes rose the most last year will likely surprise you - MarketWatch",
      description:
        "Tax assessments haven’t kept pace with rising home prices of late, which could create headaches for homeowners over the next few years",
      url: "https://www.marketwatch.com/story/this-is-where-property-taxes-increased-the-most-last-year-its-not-in-california-or-new-york-11650038743",
      urlToImage: "https://images.mktw.net/im-525749/social",
      publishedAt: "2022-04-16T15:16:00Z",
      content:
        "Todays home buyers could be in for a shock when the tax man comes calling.In 2021, around $328 billion in property taxes were imposed on single-family homes across the country, according to a new rep… [+2302 chars]",
    },
    {
      source: {
        id: null,
        name: "Cointelegraph",
      },
      author: "Arijit Sarkar",
      title:
        "Crypto Twitter reacts as Russian gov’t reviews finalized crypto bill - Cointelegraph",
      description:
        "Russia’s finance ministry shared the amended and finalized crypto bill with the government, which recommends using cryptocurrencies as legal tender",
      url: "https://cointelegraph.com/news/crypto-twitter-reacts-as-russian-govt-reviews-finalized-crypto-bill",
      urlToImage:
        "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy85MDI4NjkxYjk2MDk4YWMzYzRkZGRhZDg1NWEyZTlkMi5qcGc=.jpg",
      publishedAt: "2022-04-16T14:16:00Z",
      content:
        "The Ministry of Finance (MinFin) of Russia finalized a draft bill named On Digital Currency and has sent it to the Russian government for approval to be passed as law. The draft of the federal law cl… [+3096 chars]",
    },
    {
      source: {
        id: null,
        name: "Teslarati",
      },
      author: "Joey Klender",
      title:
        "Why Tesla won’t lose sleep over other automakers achieving massive range ratings - Teslarati",
      description:
        "Tesla is normally confronted with plenty of interesting and challenging metrics from competitors, especially in terms of range and speed. With the Mercedes-Benz VISION EQXX accomplishing a major feat of over 1,000 kilometers (620 miles) driven on a single cha…",
      url: "https://www.teslarati.com/why-tesla-wont-lose-sleep-over-other-automakers-achieving-massive-range-ratings/",
      urlToImage:
        "https://www.teslarati.com/wp-content/uploads/2022/04/22C0141_003-1200x800-1.jpg",
      publishedAt: "2022-04-16T13:58:31Z",
      content:
        "Tesla is normally confronted with plenty of interesting and challenging metrics from competitors, especially in terms of range and speed. With the Mercedes-Benz VISION EQXX accomplishing a major feat… [+5049 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Robert Ferris",
      title: "How Russia's war is cutting global auto production - CNBC",
      description:
        "Russia's invasion of Ukraine has shuttered Ukrainian factories, imperiled raw material supplies and forced auto industry watchers to revise their forecasts.",
      url: "https://www.cnbc.com/2022/04/16/how-russias-war-is-cutting-global-auto-production.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/106957721-1633967089858-gettyimages-723504579-is09b5n6v.jpeg?v=1633967303&w=1920&h=1080",
      publishedAt: "2022-04-16T13:30:02Z",
      content:
        "Russia's invasion of Ukraine has led auto industry watchers to cut production and sales forecasts for the next two years. The crisis has shuttered factories in Eastern Europe, and caused spikes in th… [+1618 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Tim Levin",
      title:
        "Electric Volkswagen ID.Buzz minivan: a closer look - Business Insider",
      description:
        "The VW ID.Buzz is an incredibly cool electric minivan that hits the US in 2024. We saw it in person and toured its functional and quirky features.",
      url: "https://www.businessinsider.com/vw-id-buzz-volkswagen-electric-bus-minivan-2024-interior-2022-4",
      urlToImage:
        "https://i.insider.com/6259d6806e3336001926efec?width=1200&format=jpeg",
      publishedAt: "2022-04-16T13:13:17Z",
      content:
        "Home\r\n Chevron icon\r\nIt indicates an expandable section or menu, or sometimes previous / next navigation options.\r\nTransportation \r\nThe Volkswagen ID.Buzz.\r\nTim Levin/Insider\r\nDeal icon\r\nAn icon in t… [+343 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Sarah O'Brien",
      title:
        "The age for required withdrawals from retirement accounts could go higher. Here's who would benefit - CNBC",
      description:
        "Those required minimum distributions, or RMDs, would eventually kick in at age 75 instead of age 72 under retirement legislation being considered by Congress.",
      url: "https://www.cnbc.com/2022/04/16/who-benefits-if-required-retirement-account-withdrawals-age-is-raised.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/106946691-1632437839410-gettyimages-82824159-bld062296.jpeg?v=1649876420&w=1920&h=1080",
      publishedAt: "2022-04-16T13:00:01Z",
      content:
        "Some future retirees could end up getting more time to amass a heap of money that won't be taxed when they or their heirs tap it.\r\nUnder a provision in a federal retirement bill that cleared the Hous… [+5075 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Mike Winters",
      title:
        "Here’s how much the same mortgage costs now, compared to last year - CNBC",
      description:
        "The interest rate on a mortgage has risen by 2% in the last year. This increases the monthly cost of a financing a home by hundreds of dollars.",
      url: "https://www.cnbc.com/2022/04/16/heres-how-much-the-same-mortgage-costs-now-compared-to-last-year.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107047243-1649966653631-GettyImages-923614588.jpg?v=1649966750&w=1920&h=1080",
      publishedAt: "2022-04-16T13:00:01Z",
      content:
        "Fewer people are shopping for homes, a sign that homebuyers are getting priced out of the market due to surging mortgage rates, which spiked to an average of 5% this week for 30-year fixed-rate mortg… [+1891 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Ben Ryder Howe, Tristan Spinski",
      title: "The Battery That Flies - The New York Times",
      description:
        "A new aircraft being built in Vermont has no need for jet fuel. It can take off and land without a runway. Amazon and the Air Force are both betting on it. So who will be in the cockpit?",
      url: "https://www.nytimes.com/2022/04/16/business/beta-electric-airplane.html",
      urlToImage:
        "https://static01.nyt.com/images/2022/04/17/business/00Flying-batteries-lede-02/00Flying-batteries-lede-02-facebookJumbo.jpg",
      publishedAt: "2022-04-16T12:29:58Z",
      content:
        "He then found himself considering a career on Wall Street, doing something he didnt want to do away from where he wanted to be: back in Vermont.\r\nTheres a brain drain among engineers from his home st… [+1871 chars]",
    },
  ];
  constructor() {
    super();
    console.log("hello i am a constructor");
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=100e4e3ba98b4dc083d1447556bf1f6d";
    let data = fetch(url);
    let parsedData = data.json;
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults:parsedData.totalResults });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=100e4e3ba98b4dc083d1447556bf1f6d&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = fetch(url);
    let parsedData = data.json;
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });

    console.log("Next");
    this.setState({
      page: this.state.page - 1,
    });    

    console.log("Previous");
  };

  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=100e4e3ba98b4dc083d1447556bf1f6d&page=${
      this.state.page + 1
    }&pageSize=20`;
    let data = fetch(url);
    let parsedData = data.json;
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });

    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    }
    else{
    console.log("Next");
    this.setState({
      page: this.state.page + 1,
    });
  };
}

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
          &rbrace;
          <div className="container  d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              class="btn btn-dark"
              onClick={this.handlePrevClick}
            >
              {" "}
              &larr; Previous
            </button>
            <button
              type="button"
              class="btn btn-dark"
              onClick={this.handleNextClick}
            >
              {" "}
              &rarr; Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
