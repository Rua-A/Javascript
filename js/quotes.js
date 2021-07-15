const quotes = [
    {
        quote:"자신감은 전염된다. 자신감의 부족도 마찬가지다.",
        author:"빈스 롬바르디 / Vince Lombardi",
    },
    {
        quote:"얕은 사람은 행운을 믿으며, 강한 사람은 원인과 결과를 믿는다.",
        author:"랄프 왈도 에머슨 / Ralph Waldo Emerson",
    },
    {
        quote:"하지 말아야 할 것을 효율적으로 하는 것보다 더 비생산적인 것은 없다.",
        author:"피터 드러커 / Peter Drucker",
    },
    {
        quote:"길이 이끄는 대로 가지 마라. 대신 길이 없는 곳으로 가서 발자국을 남겨라",
        author:"랄프 왈도 에머슨 / Ralph Waldo Emerson",
    },
    {
        quote:"지난 일은 어쩔 수 없는 바 슬퍼한 들 이미 엎질러진 물이다.",
        author:"윌리엄 세익스피어 / William Shakespeare",
    },
    {
        quote:"게으름은 즐검지만 괴로운 상태다. 우리는 행복해지기 위해 무엇인가 하고 있어야 한다.",
        author:"마하트마 간디 / Mahatma Gandhi",
    },
    {
        quote:"좋아하는 직업을 택하면 평생 하루도 일하지 않아도 될 것이니라.",
        author:"공자 / Confucius",
    },
    {
        quote:"친구를 고르는 데는 천천히, 친구를 바꾸는 데는 더 천천히.",
        author:"벤자민 프랭클린 / Benjamin Franklin",
    },
    {
        quote:"실수할 자유가 없는 자유란 가치가 없다.",
        author:"마하트마 간디 / Mahatma Gandhi",
    },
    {
        quote:"모든 천재들에게는 약간의 미친 구석이 있다.",
        author:"세네카 / Seneca",
    },
    {
        quote:"현명한 자라면 찾아낸 기회보다 더 많은 기회를 만들 것이다.",
        author:"프랜시스 베이컨 / Sir Francis Bacon",
    },
    {
        quote:"기적은 철저히 계산되어 있다. 아무것도 하지 않으면 아무일도 일어나지 않는다.",
        author:"-[  ]-",
    },
    {
        quote:"나는 똑똑한 것이 아니라 단지 문제를 더 오래 연구할 뿐이다.",
        author:"알버트 아인슈타인 / Albert Einstein",
    },
    {
        quote:"끝까지 해보기 전까지는 늘 불가능해 보입니다.",
        author:"넬슨 만델라 / Nelson Mandela",
    },
    {
        quote:"내일에 대한 준비로 가장 좋은 것은 지금 오늘에 최선을 다하는 것입니다.",
        author:"잭슨 브라운, 주니어 / H. Jackson Brown, Jr.",
    }
];

const quote = document.querySelector("#quote span:first-child"); 
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
console.log(todaysQuote.quote);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;