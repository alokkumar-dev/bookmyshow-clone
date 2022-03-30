import "./BankCart.css"
export const BanksCart = ()=>{

    const bankCarts = [
        {
            imgUrl: "https://in.bmscdn.com/offers/offerlisting/icici-bank-25percent-discount-offer-icicicc520.jpg?29122021183637",
            bankName:"ICICI BANK CREDIT CARD 25...",
            validity: "Valid till 30 Apr 2022 23:59",
            logo: "https://in.bmscdn.com/offers/tnclogo/icici-bank-25percent-discount-offer-icicicc520.jpg?29122021183638"
        },
        {
            imgUrl: "https://in.bmscdn.com/offers/offerlisting/sbi-inr-500-off-on-signature-credit-card-sbi0613.jpg?06122021123523",
            bankName:"ICICI BANK CREDIT CARD 25...",
            validity: "Valid till 30 Apr 2022 23:59",
            logo: "https://in.bmscdn.com/offers/tnclogo/sbi-inr-500-off-on-signature-credit-card-sbi0613.jpg?06122021123523"
        },
        {
            imgUrl: "https://in.bmscdn.com/offers/offerlisting/aurum-credit-card-offer-sbispr0420.jpg?05022021115435",
            bankName:"ICICI BANK CREDIT CARD 25...",
            validity: "Valid till 30 Apr 2022 23:59",
            logo: "https://in.bmscdn.com/offers/tnclogo/aurum-credit-card-offer-sbispr0420.jpg?05022021115436"
        },
        {
            imgUrl: "https://in.bmscdn.com/offers/offerlisting/icici-bank-complimentary-offer-iciccom520.jpg?29122021183443",
            bankName:"ICICI BANK CREDIT CARD 25...",
            validity: "Valid till 30 Apr 2022 23:59",
            logo: "https://in.bmscdn.com/offers/tnclogo/icici-bank-25percent-discount-offer-icicicc520.jpg?29122021183444"
        },
        {
            imgUrl: "https://in.bmscdn.com/offers/offerlisting/rblmon1216.jpg?29092021095443",
            bankName:"ICICI BANK CREDIT CARD 25...",
            validity: "Valid till 30 Apr 2022 23:59",
            logo: "https://in.bmscdn.com/offers/tnclogo/rblmon1216.jpg?29092021095443"
        },
        {
            imgUrl: "https://in.bmscdn.com/offers/offerlisting/au-bank-credit-card-offer-aucc1221.jpg?25032022094327",
            bankName:"ICICI BANK CREDIT CARD 25...",
            validity: "Valid till 30 Apr 2022 23:59",
            logo: "https://in.bmscdn.com/offers/tnclogo/au-bank-credit-card-offer-aucc1221.jpg?25032022094328"
        },
        {
            imgUrl: "https://in.bmscdn.com/offers/offerlisting/rblwc1216.jpg?29092021095537",
            bankName:"ICICI BANK CREDIT CARD 25...",
            validity: "Valid till 30 Apr 2022 23:59",
            logo: "https://in.bmscdn.com/offers/tnclogo/rblwc1216.jpg?29092021095537"
        },
        {
            imgUrl: "https://in.bmscdn.com/offers/offerlisting/rbl-bank-younique-credit-card-offer-rblyouc520.jpg?15122021173244",
            bankName:"ICICI BANK CREDIT CARD 25...",
            validity: "Valid till 30 Apr 2022 23:59",
            logo: "https://in.bmscdn.com/offers/tnclogo/rbl-bank-younique-credit-card-offer-rblyouc520.jpg?15122021173244"
        },
        {
            imgUrl: "https://in.bmscdn.com/offers/offerlisting/kreditbee-card-offer-kredcc1221.jpg?24032022102248",
            bankName:"ICICI BANK CREDIT CARD 25...",
            validity: "Valid till 30 Apr 2022 23:59",
            logo: "https://in.bmscdn.com/offers/tnclogo/kreditbee-card-offer-kredcc1221.jpg?24032022102249"
        },
        {
            imgUrl: "https://in.bmscdn.com/offers/offerlisting/hdfc-25percent-off-on-timescard-htc0314.jpg?28092021121410",
            bankName:"ICICI BANK CREDIT CARD 25...",
            validity: "Valid till 30 Apr 2022 23:59",
            logo: "https://in.bmscdn.com/offers/tnclogo/htc0314.jpg?28092021121410"
        },
        {
            imgUrl: "https://in.bmscdn.com/offers/offerlisting/indusind-bank-pioneer-heritage-credit-card-offer-indus1120.jpg?21032022185307",
            bankName:"ICICI BANK CREDIT CARD 25...",
            validity: "Valid till 30 Apr 2022 23:59",
            logo: "https://in.bmscdn.com/offers/tnclogo/indus0313.jpg?21032022185307"
        },
        {
            imgUrl: "https://in.bmscdn.com/offers/offerlisting/onecard-credit-card-offer-onecc1121.jpg?28022022112745",
            bankName:"ICICI BANK CREDIT CARD 25...",
            validity: "Valid till 30 Apr 2022 23:59",
            logo: "https://in.bmscdn.com/offers/tnclogo/onecard-credit-card-offer-onecc1121.jpg?28022022112745"
        },
        {
            imgUrl: "https://in.bmscdn.com/offers/offerlisting/visa-infinite-program-vip0116.jpg?22032022144736",
            bankName:"ICICI BANK CREDIT CARD 25...",
            validity: "Valid till 30 Apr 2022 23:59",
            logo: "https://in.bmscdn.com/offers/tnclogo/vip0116.jpg?22032022144737"
        },
        {
            imgUrl: "https://in.bmscdn.com/offers/offerlisting/indusind-bank-platinum-aura-edge-credit-card-offer-indae0222.jpg?16022022133451",
            bankName:"ICICI BANK CREDIT CARD 25...",
            validity: "Valid till 30 Apr 2022 23:59",
            logo: "https://in.bmscdn.com/offers/tnclogo/indus0313.jpg?16022022133451"
        },
        {
            imgUrl: "https://in.bmscdn.com/offers/offerlisting/rupay-credit-card-offer-rpaycc1121.jpg?25032022155930",
            bankName:"ICICI BANK CREDIT CARD 25...",
            validity: "Valid till 30 Apr 2022 23:59",
            logo: "https://in.bmscdn.com/offers/tnclogo/rupay-credit-card-offer-rpaycc1121.jpg?25032022155930"
        },
        {
            imgUrl: "https://in.bmscdn.com/offers/offerlisting/visa-blockbuster-weekends-offer-vsbogo1111.jpg?22032022144700",
            bankName:"ICICI BANK CREDIT CARD 25...",
            validity: "Valid till 30 Apr 2022 23:59",
            logo: "https://in.bmscdn.com/offers/tnclogo/vsbogo1111.jpg?22032022144700"
        },
        {
            imgUrl: "https://in.bmscdn.com/offers/offerlisting/hsbc-saturday-offer-hsbc0815.jpg?29122021183928",
            bankName:"ICICI BANK CREDIT CARD 25...",
            validity: "Valid till 30 Apr 2022 23:59",
            logo: "https://in.bmscdn.com/offers/tnclogo/hsbc-saturday-offer-hsbc0815.jpg?29122021183928"
        },
        {
            imgUrl: "https://in.bmscdn.com/offers/offerlisting/union-bank-debit-and-credit-card-offer-union0122.jpg?14012022150645",
            bankName:"ICICI BANK CREDIT CARD 25...",
            validity: "Valid till 30 Apr 2022 23:59",
            logo: "https://in.bmscdn.com/offers/tnclogo/union-bank-debit-and-credit-card-offer-union0122.jpg?14012022150645"
        },
        {
            imgUrl: "https://in.bmscdn.com/offers/offerlisting/axis-burgundy-private-and-reserve-credit-card-offer-axscc1219.jpg?31032021141109",
            bankName:"ICICI BANK CREDIT CARD 25...",
            validity: "Valid till 30 Apr 2022 23:59",
            logo: "https://in.bmscdn.com/offers/tnclogo/axis-burgundy-private-credit-card-offer-axscc1219.jpg?31032021141109"
        },
        {
            imgUrl: "https://in.bmscdn.com/offers/offerlisting/axis-magnus-credit-card-offer-axismg0919.jpg?17092021191641",
            bankName:"ICICI BANK CREDIT CARD 25...",
            validity: "Valid till 30 Apr 2022 23:59",
            logo: "https://in.bmscdn.com/offers/tnclogo/axis-magnus-credit-card-offer-axismg0919.jpg?17092021191641"
        },
        {
            imgUrl: "https://in.bmscdn.com/offers/offerlisting/axis-select-credit-card-offer-axsscc0420.jpg?31032021141216",
            bankName:"ICICI BANK CREDIT CARD 25...",
            validity: "Valid till 30 Apr 2022 23:59",
            logo: "https://in.bmscdn.com/offers/tnclogo/axis-select-credit-card-offer-axsscc0420.jpg?31032021141216"
        },
        {
            imgUrl: "https://in.bmscdn.com/offers/offerlisting/yes-private-credit-card-offer-yespr0917.jpg?31052021195836",
            bankName:"ICICI BANK CREDIT CARD 25...",
            validity: "Valid till 30 Apr 2022 23:59",
            logo: "https://in.bmscdn.com/offers/tnclogo/yes-private-credit-card-offer-yespr0917.jpg?31052021195836"
        },
        {
            imgUrl: "https://in.bmscdn.com/offers/offerlisting/dschbogo.jpg?31032021145027",
            bankName:"ICICI BANK CREDIT CARD 25...",
            validity: "Valid till 30 Apr 2022 23:59",
            logo: "https://in.bmscdn.com/offers/tnclogo/dschbogo.jpg?31032021145027"
        },
        {
            imgUrl: "https://in.bmscdn.com/offers/offerlisting/club-vistara-indusind-bank-explorer-credit-card-offer-indvis0921.jpg?27092021181822",
            bankName:"ICICI BANK CREDIT CARD 25...",
            validity: "Valid till 30 Apr 2022 23:59",
            logo: "https://in.bmscdn.com/offers/tnclogo/dschbogo.jpg?31032021145027"
        },
        {
            imgUrl: "https://in.bmscdn.com/offers/offerlisting/yes-first-and-yes-premia-credit-card-25-off-yes0516.jpg?08092021163955",
            bankName:"ICICI BANK CREDIT CARD 25...",
            validity: "Valid till 30 Apr 2022 23:59",
            logo: "https://in.bmscdn.com/offers/tnclogo/yes-private-credit-card-offer-yespr0917.jpg?31052021195836"
        },
        {
            imgUrl: "https://in.bmscdn.com/offers/offerlisting/axis-neo-credit-card-10percent-offer-axsneo0415.jpg?29032022115626",
            bankName:"ICICI BANK CREDIT CARD 25...",
            validity: "Valid till 30 Apr 2022 23:59",
            logo: "https://in.bmscdn.com/offers/tnclogo/axsneo0415.jpg?29032022115626"
        },
        {
            imgUrl: "https://in.bmscdn.com/offers/offerlisting/indusind-bank-pioneer-heritage-credit-card-offer-indus1120.jpg?21032022185307",
            bankName:"ICICI BANK CREDIT CARD 25...",
            validity: "Valid till 30 Apr 2022 23:59",
            logo: "https://in.bmscdn.com/offers/tnclogo/indus0313.jpg?21032022185307"
        },
        {
            imgUrl: "https://in.bmscdn.com/offers/offerlisting/indusind-signature-legend-credit-card-offer-indslc0217.jpg?21032022185617",
            bankName:"ICICI BANK CREDIT CARD 25...",
            validity: "Valid till 30 Apr 2022 23:59",
            logo: "https://in.bmscdn.com/offers/tnclogo/indslc0217.jpg?21032022185617"
        },
        {
            imgUrl: "https://in.bmscdn.com/offers/offerlisting/rbl-bank-supercard-offer-rbl0117.jpg?29092021095059",
            bankName:"ICICI BANK CREDIT CARD 25...",
            validity: "Valid till 30 Apr 2022 23:59",
            logo: "https://in.bmscdn.com/offers/tnclogo/rbl0117.jpg?29092021095059"
        },
        {
            imgUrl: "https://in.bmscdn.com/offers/offerlisting/idbicc0915.jpg?16032022193158",
            bankName:"ICICI BANK CREDIT CARD 25...",
            validity: "Valid till 30 Apr 2022 23:59",
            logo: "https://in.bmscdn.com/offers/tnclogo/idbicc0915.jpg?16032022193159"
        },

    ]

    return(
        <>
        {
            bankCarts.map((el)=>(
                <div className="bankOneCart">
                <div className="imgDiv">
                    <img src={el.imgUrl} alt="" />
                </div>
                <div className="bankLogo">
                    <img src={el.logo} alt="" />
                </div>
                <div className="textDiv">
                    <h5>{el.bankName}</h5>
                    <h6>{el.validity}</h6>
                </div>
            </div>
            ))
        }
            
        </>
    )
}