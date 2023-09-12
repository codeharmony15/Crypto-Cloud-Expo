import React from "react"
import styled from "styled-components"
import Conference from "../../components/Conference"

const InsightSection = styled.section`
    background: linear-gradient(100.07deg, #121e52 0%, #e50134 176.51%);
    padding: 100px 0;
    width: 100%;
    margin-bottom: 100px;
`
const InsightContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
`
const InsightTitle = styled.h1`
    color: white;
    text-align: center;
    margin-bottom: 30px;
    font-size: 47px;
`
const InsightList = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Insight = () => {
    return(
        <InsightSection>
            <InsightContainer>
                <InsightTitle>Insights From Our Conference</InsightTitle>
                <InsightList>
                    <Conference
                        src="images/How-have-cryptocurrency-payments-evolved-in-everyday-life.jpg"
                        title="How have cryptocurrency payments evolved in everyday life?"
                        content="In the last few years, cryptocurrency payments have come a long way, and they continue to evolve and become more mainstream. As more merchants accept cryptocurrency payments and new payment processors and debit cards are developed."
                    />
                    <Conference
                        src="images/The-current-cryptocurrency-trends-are-comprised-of-the-following-facts.jpg"
                        title="The current cryptocurrency trends are comprised of the following facts."
                        content="cryptocurrencies are becoming more integrated into mainstream society and are likely to continue to grow and evolve in the coming years."
                    />
                    <Conference
                        src="images/How-the-Stablecoins-and-NFT-are-changing.jpg"
                        title="How the Stablecoins and NFT are changing."
                        content="Both stablecoins and NFTs are rapidly evolving areas of the crypto industry, with ongoing developments in technology, regulation, and market demand shaping their future."
                    />
                    <Conference
                        src="images/How-has-the-crypto-industrys-regulation-evolved.jpg"
                        title="How has the crypto industry's regulation evolved?"
                        content="The regulation of the crypto industry is still in its early stages and will likely continue to evolve in the coming years as the technology and its use cases continue to develop."
                    />
                    <Conference
                        src="images/What-are-the-top-cryptocurrencies-in-todays-market.jpg"
                        title="What are the top cryptocurrencies in today's market?"
                        content="It is important to note that the cryptocurrency market is highly volatile and can change rapidly. Therefore, investors and traders should conduct their own research and analysis before making any investment decisions."
                    />
                    <Conference
                        src="images/What-is-the-current-trend-in-crypto-investing-and-trading.jpg"
                        title="What is the current trend in crypto investing and trading?"
                        content="The crypto investing and trading landscape is constantly evolving, with new trends and technologies emerging all the time.Investors and traders need to stay informed and educated about the latest developments to make informed decisions."
                    />
                </InsightList>
            </InsightContainer>
        </InsightSection>
    )
}

export default Insight