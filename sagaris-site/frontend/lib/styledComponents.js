// Import NPM modules
import styled, { css, injectGlobal } from 'styled-components'
//Import icons
import { FaFacebookSquare, FaInstagram, FaTelegram, FaLinkedin, FaCheck } from 'react-icons/fa'

//Constants
const textShadow = 'text-shadow: 2px 2px 0px rgba(0, 173, 255, 1);'

//Global styles
const sizes = {
    fullHd: 1920,
    hd: 1600,
    someForHeader: 1250,
    desktop: 992,
    tablet: 768,
    phone: 425,
  }
  
  // Iterate through the sizes and create a media template
  const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `
  
    return acc
  }, {})

export default injectGlobal`
    /* @font-face {
        font-family: 'Lato';
        src: url('./fonts/LATO-REGULAR.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Source Sans Pro';
        src: url('./fonts/SourceSansPro-Light.ttf') format('truetype') font-weight-lighter,
             url('./fonts/SourceSansPro-Bold.ttf') format('truetype') font-weight-bold;
    } */
        
    html {
        overflow-x: hidden;
    }
    body {
        margin: 0px auto;
        font-family: 'Lato', sans-serif ;
        /* font-family: 'SourceSansPro-Bold', monospace ; */
        overflow-x: hidden;
        max-width: 1920px;
    

    .slick-arrow{
        height: 50px;
        width: 50px;
    }

    .slick-arrow{
        height: 50px;
        width: 50px;
    }
    .slick-prev{
        left: 6%;
        top: 51%;
        z-index: 20;
        :before{
            content: url('../../static/Arrow_Slider_left.png');
        }
    }
    .slick-next{
        right: 6%;
        top: 50%;

        :before{
            content: url('../../static/Arrow_Slider_right.png');
        }
        .input-feedback{
            color: red;
        }
    }

    

    .slider {
        z-index: 5;
    }

    .backgroundSlider {
        z-index: -1;
        position: absolute;
        background: linear-gradient( rgba(0,19,56,0.6), rgba(0,19,56,0.6)), url('../../static/BackgrForSlider.jpg');
        top: 0;
        width: 100%;
        filter: brightness(.5)

    }

    }

    /* This line fix blue border on slider scroll */
    .slick-slide, .slick-slide *{ outline: none !important; }

    @media (max-width: 425px) {
     

        .slick-prev{
            left: 0%;
            top: 35%;
            zoom: 0.8;
      
    }
        .slick-next{
            right: 0%;
            top: 35%;
            zoom: 0.8;
        }


    }

`


  
 
export const ProjectsContainerSC = styled.div`
`
export const ProjectLineByDivSC = styled.div`
   
`

//Special Wrappers
export const ISOA = styled.a`
    width: 50%;
    display: inherit;
    text-decoration: none;
    width: -webkit-fill-available;
    color: inherit;
`

//Slider

export const SliderWrapperSC = styled.div`
-ms-grid-area: ${props => props.area};
    grid-area: ${props => props.area};
    height: 600px;
    background: transparent;
    overflow: hidden;
    position: relative;
    background-size: cover;
        ${media.tablet `
            height: 800px;
            `
        }
        ${media.phone `
            height: 807px;
            `
        }

`
export const ContainerForSliderElementsSC = styled.div`
position: relative;
height: 600px;
overflow: hidden;
    ${media.tablet `
    height: 800px;
    `}
    ${media.phone `
            height: 807px;
            `
        }

img{
    position: relative;
    top: 24%;
    left: 10.5%;
    width: 80px;
    border-radius: 50%;
    filter: contrast(35%) sepia(100%) hue-rotate(130deg) brightness(0.6) saturate(500%);
        ${media.tablet `
        width: 70px;
        
        top: 16%;
        left: 17.5%;
    `}
    ${media.phone `
        top: 16%;
        left: 17.5%;
        `}

}
a{
    text-decoration: none;
    text-transform: uppercase;
    color: #00B4A9;
    text-shadow: 0 0 30px #00B4A9;
    position: absolute;
    right: 13%;
    bottom: 11.5%;
    cursor: pointer;
    ${media.tablet `
    bottom: 12%;
    `}
    ${media.phone `
        display: none;
        `
    }

    }

       ${ProjectLineByDivSC} {
        width: 76%;
    position: absolute;
    bottom: 13%;
    left: 0%;
    background: #00B4A9;
    box-shadow: 0 0 30px 1px #00B4A9;
    height: 2px;
            ${media.desktop `
            width: 70%;
            `}

            ${media.tablet `
            width: 60%;
            `}
            ${media.phone `
                display: none;
                `
            }
    }

`
export const SliderBackgroundImageSC = styled.div`
height: 807px;
img{
        height: 807px;
        @media (min-width: 1100px ){
            width: 100%;
        }
    }
`
export const SliderBackgroundImageProjectSC = styled.div`
height: 807px;
    img{
        height: 807px;
        @media (min-width: 1500px ){
            width: 100%;
        }
    }
`

export const SliderSircleElementSC = styled.div`
    width: 55em;
    z-index: 0;
    border-radius: 50%;
    height: 55em;
    background: rgba(0,19,56,0.6) no-repeat;
    box-shadow: 0px 0px 25px #fff;
    position: absolute;
    right: -6%;
    top: -49%;
    @media(min-width: 1650px){
    right:2%;
    }
    ${media.someForHeader`
        width: 46em;
        height: 46em;
        top: -36%;
    `}

    ${media.desktop`
    width: 36em;
    height: 36em;
    top: -12%;
    `}
    ${media.tablet `
    width: 29em;
    height: 29em;
    right: -16%;
    top: 1%;
    `}
    ${media.phone `
        display: none;
        `
    }


`
export const SliderTextContentSC = styled.div`
    position: relative;
    width: 80%;
    left: 10%;
    top: 28%;
    /* height: 230px; */
    -webkit-column-count: 2;
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
    line-height: 1.5;
    padding-top: 0px;
    padding-bottom: 230px;
           

            ${media.tablet `
            height: auto;
            -webkit-column-count: 1;
            -moz-column-count: 1;
            -webkit-column-count: 1;
            column-count: 1;
            width: 70%;
            left: 17%;
            top: 18%;
            
            `}
            ${media.phone `
            -webkit-column-count: 1;
            -moz-column-count: 1;
            -webkit-column-count: 1;
            column-count: 1;
            width: 70%;
            left: 17%;
            top: 18%;
                `
            }


    h1{
    font-size: 37px;
    margin-top: 0;
    margin-bottom: 40px;
    color: #00B4A9;
    text-shadow:  0px 0px 25px #00B4A9;
            ${media.desktop`
            font-size: 32px;
            `}
    ${media.tablet `
    font-size: 37px;
    `}
    ${media.phone `
        font-size: 32px;
        `
    }

    }

    P{
        font-size: 16px;
        color: #fff;
        opacity: 0.6;
        z-index:15;
        padding-bottom: 70px;
        ${media.tablet `
        margin-top: -25px;
        `}
        ${media.phone `
        margin-top: -25px;
        `
    }
    }
`

// Layouts
export const Body = styled.body`
    width: 100%;
    margin: 0px auto;
    overflow-x: hidden;
`
export const SocialsWrapperSC = styled.nav`
    -ms-grid-area: Socials;
    grid-area: Socials;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    margin-bottom: 55px;
    margin-left: -23%;
    ${media.tablet`
    margin-left: -200px;

    `}
    ${media.phone`
        margin-bottom: 25px;
        margin-left: -125px;

        `
    }
`
export const SocialLinkSC = styled.a`
margin-left: 56px;
${media.phone`
        margin-left: 28px;
        
        `
    }


`


export const WhoWeAreLayout = styled.div`
    display: -ms-grid;
    -ms-grid-template-columns: 100%;
    -ms-grid-template-rows: auto;
    -ms-grid-template-areas: 
        "AboutUs"
        "Team"
        "Footer";

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-template-areas: 
        "AboutUs"
        "Team"
        "Footer";

`




export const ProjectsLayoutSC = styled.div`
     display: -ms-grid;
    -ms-grid-template-columns: 100%;
    -ms-grid-template-rows: auto;
    -ms-grid-template-areas: 
        "ProjectsSlider"
        "ProjectsList"
        "Footer";

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-template-areas: 
        "ProjectsSlider"
        "ProjectsList"
        "Footer";
       
            ${SliderWrapperSC}{
            height: 600px;
            /* background: linear-gradient( rgba(0,19,56,0.6), rgba(0,19,56,0.6)), url('../../static/brainstorming.jpg'); */
            overflow: hidden;
            background-size: cover;
            position: relative;
                .projectSlider{

                        .slick-prev{
                        left: 6%;
                        top: 37%;
                        zoom: 0.8;
                
                }
                    .slick-next{
                        right: 6%;
                        top: 37%;
                        zoom: 0.8;
                    }

                ${media.phone`    
                    .slick-prev{
                        left: 0%;
                        top: 22%;
                        zoom: 0.8;
                
                }
                    .slick-next{
                        right: 0%;
                        top: 22%;
                        zoom: 0.8;
                    }
                `}


                }
                
            ${media.tablet `
            height: 657px;
            `}  

            ${media.phone `
            height: 807px;
            `}            
                ${SliderSircleElementSC}{
                    ${media.someForHeader`
                    left: -13%;
                    top: -25%;

    
                        `}
                        ${media.desktop`
                        left: -13%;
                        top: -12%;
    
                        `}
                left: -13%;
                top: -51%;
                    ${media.tablet`
                    left: -4%;
                    top: 3%;
                    `}

                }
            }
        


`

export const ProjectsContainerForSliderSC = styled.div`
    height: 600px;
    position: relative;
    width: 100%;
    line-height: 1.5;
            ${media.tablet`
            height: 657px;
            `}
            ${media.phone`
            height: 807px;
            `}
    


    a{
    text-decoration: none;
    text-transform: uppercase;
    color: #FF5577;
    text-shadow: 0 0 30px #FF5577;
    position: absolute;
    right: 13%;
    bottom: 11%;
    cursor: pointer;
    ${media.tablet `
            font-size: 18px;
            bottom: 7.5%;
            right: 6%;
    `}

            ${media.phone `
            font-size: 18px;
            bottom: 7.5%;
            right: 6%;
            `}
        
    }

       ${ProjectLineByDivSC} {
        width: 76%;
    position: absolute;
    bottom: 13%;
    left: 0%;
    background: #FF5577;
    box-shadow: 0 0 30px 1px #FF5577;
    height: 2px;
            ${media.desktop `
            width: 70%;
            `}
            ${media.tablet `
            width: 60%;
            bottom: 9%;
    `}
            ${media.phone `
            width: 43%;
            bottom: 9%;
            `}
    }

${ProjectsContainerSC}{

    position: relative;
    width: 80%;
    left: 10%;
    top: 24%;
    ${media.tablet `
        -webkit-column-count: 1;
        -moz-column-count: 1;
        -webkit-column-count: 1;
        column-count: 1;
        width: 70%;
        left: 17%;
        top: 15%;
    `}
        ${media.phone `
        -webkit-column-count: 1;
        -moz-column-count: 1;
        -webkit-column-count: 1;
        column-count: 1;
        width: 70%;
        left: 17%;
        top: 15%;
            `
        }

    h1{
    font-size: 37px;
    margin-top: 0;
    margin-bottom: 40px;
    color: #FF5577;
    text-shadow:  0px 0px 25px #FF5577;
    ${media.tablet `
    font-size: 37px;
    `}
            ${media.phone `
            font-size: 32px;
            `}
    
    }
p{
    P{
        font-size: 16px;
        color: #fff;
        opacity: 0.6;
        z-index:15;
        -webkit-column-count: 2;
        -moz-column-count: 2;
        -webkit-column-count: 2;
        column-count: 2;
        -webkit-column-width: 150px;
        -moz-column-width: 150px;
        -webkit-column-width: 150px;
        ${media.tablet `
        -webkit-column-count: 1;
        -moz-column-count: 1;
        -webkit-column-count: 1;
        column-count: 1;
        -webkit-column-width: 150px;
        -moz-column-width: 150px;
        -webkit-column-width: 150px;

        margin-top: 0;
        `}
         ${media.phone `
        margin-top: -25px;
        `}
    }
} 
    
}
`

export const ServicesLayoutSC = styled.div`
    display: -ms-grid;
    -ms-grid-template-columns: 100%;
    -ms-grid-template-rows: auto;
    -ms-grid-template-areas: 
        "ServicesSlider"
        "ServicesList"
        "Footer";

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-template-areas: 
        "ServicesSlider"
        "ServicesList"
        "Footer";
       
`

export const LangSwitcher = styled.span`
    display: none;

    cursor: pointer;
    font-size: 1.4rem;
    text-transform: uppercase;
   
`

// Header
export const ImageLogoSC=styled.img`
cursor: pointer;

`
export const ContainerForLogoHeaderSC = styled.div`
    position: relative;
    right: -4%;
    margin-top: 55px;

     ${media.phone `
    
    right: 1%;
    margin-top: 30px;
    zoom: 0.7;
`
}

`


export const BurgContainerSC = styled.div``

export const HeaderElement = styled.header`
    width: 100%;
    max-width: 1920px;
    display: flex;
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: 300px 1fr 190px 250px 50px;
    grid-template-rows: 80px;
    justify-items: center;
    align-items: center;
    background: rgba(0,19,56,0.8);
    position: fixed;
    font-size: 18px;
    z-index: 99;
    ${ImageLogoSC}{
        /* width: 64px;
        height: 48px; */
    }



    ${BurgContainerSC}{
        display: none;

        ${media.desktop `
                display:block;
                margin-left: -25px;
           
        `}

        ${media.tablet `
                display:block;
                margin-left: -25px;
           
        `}

        ${media.phone `
                margin-left: -25px;
                `
                }
        ${media.phone `
                display:block;
           
        `}
    }
    ${media.someForHeader `
        -ms-grid-template-columns: 1fr 465px 190px 1fr;
        grid-template-columns: 1fr 465px 190px 1fr;
        `}
        ${media.desktop`
        -ms-grid-template-columns: 100px 1fr 100px;
        -ms-grid-gap: 1px;
        grid-template-columns: 100px 1fr 100px;
        grid-gap: 1px;
        top: 0%;
        
        `}

    ${media.tablet `
        -ms-grid-template-columns: 100px 1fr 50px;
        grid-template-columns: 100px 1fr 50px;
        `}
    ${media.phone `
        -ms-grid-template-columns: 100px 1fr 50px;
        grid-template-columns: 100px 1fr 50px;
        `}

`
export const ContainerLangSwitcherSC = styled.div`
display: inline-block;
color: #AAAEFF;
text-shadow: 0px 0px 30px #AAAEFF;
margin-right: 10%;
font-family: 'Lato', sans-serif;
font-size: 18px;

    ${media.desktop`
            display: none;
    `}

    ${media.tablet `
            display: none;
            `
    }

    ${media.phone `
            display: none;
            `
    }
`

export const ButtonToConnectToUsSC = styled.a `

background-color: transparent;
border-radius:6px;
border: 2px solid #AAAEFF;
color: #AAAEFF;
text-shadow: 0px 0px 30px #AAAEFF;
box-shadow:0px 0px 20px #AAAEFF;
width: 140px;
margin-left: 50px;
padding: 10px 0px;
padding-left: 10px;
text-decoration: none;

font-size: 18px;
  :hover { cursor: pointer;}
                ${media.tablet `
                margin-left: 0;
                `
                }
                ${media.phone `
                margin-left: -35px;
                `
                }
`

export const NavigationSC = styled.nav`

    text-transform: uppercase;
    ${media.desktop`
            display: none;
    `}

     ${media.tablet `
            display: none;
            `
     }

    ${media.phone `
            display: none;
            `
    }
    
`



export const StyledLink = styled.a`
    color: ${props => props.active ? 'darkred' : null};
   margin-left: 20px;
   font-weight: normal;
   color: #AAAEFF;
   text-shadow: 0px 0px 30px #AAAEFF;
   cursor: pointer;


 `
 export const LineInHeaderSC = styled.hr`
 width: 100%;
 color: #AAAEFF;
 box-shadow: 0px 0px 10px 2px rgba(170, 174, 255, 0.5);
 border: 1px solid #AAAEFF;
 margin: 0;
 margin-top: 80px;
 position: absolute;
 `
export const OpenBurgDivSC = styled.div``

export const NavigationMobileSC = styled.div``

export const BurgerNavSC = styled.div`
    display: none;
   
    @media (max-width: 992px) {
    display: block;
    position: relative;
    top: 0px;
    left: 0px;
    

        ${NavigationMobileSC} {
        background: rgba(0,19,56,0.8);
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 30;

        ${OpenBurgDivSC}{
            position: absolute;
            top: 4%;
            right: 4%;
        }
        
        ${ContainerLangSwitcherSC}{

            display: inline-block;
            color: #AAAEFF;
            text-shadow: 0px 0px 30px #AAAEFF;
            margin-right: 10%;
            margin-top: 9%;
            margin-left:27%;
            font-family: 'Lato', sans-serif;
            font-size: 14px;
            z-index: 40;

            ${LangSwitcher}{
                font-size: 16px;
                margin-right: 26px;
            }
        }
        ${ContainerForLogoHeaderSC}{
                right: 9%;
                margin-top: 30px;
                zoom: 0.9;
                margin-bottom: 40px;
            }
        ${NavigationSC}{
            display: flex;
            flex-direction: column;
            margin-left: 22%;
            height: 40%;
            justify-content: space-between;
            font-size: 18px;

        }
        ${ButtonToConnectToUsSC}{
            position: relative;
            margin-left: 7%;
            background-color: transparent;
            border-radius:6px;
            border: 2px solid #AAAEFF;
            color: #AAAEFF;
            text-shadow: 0px 0px 30px #AAAEFF;
            box-shadow:0px 0px 20px #AAAEFF;
            width: 140px;
            margin-left: 23%;
            top: 84px;
            padding: 10px 10px;
            padding-left: 10px;
            text-decoration: none;
        }
        ${SocialsWrapperSC}{
            position: relative;
            top: 125px;
            left: 10%;
            zoom: 1.3;

            ${SocialLinkSC} {
                margin-left:45px;
            }

        }
    }
    }
    @media (max-width: 425px) {
    display: block;
    position: relative;
    top: 0px;
    left: 0px;
    

        ${NavigationMobileSC} {
        background: rgba(0,19,56,0.8);
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 30;

        ${OpenBurgDivSC}{
            position: absolute;
            top: 4%;
            right: 4%;
        }
        
        ${ContainerLangSwitcherSC}{

            display: inline-block;
            color: #AAAEFF;
            text-shadow: 0px 0px 30px #AAAEFF;
            margin-right: 10%;
            margin-top: 9%;
            margin-left:17%;
            font-family: 'Lato', sans-serif;
            font-size: 16px;
            z-index: 40;

            ${LangSwitcher}{
                font-size: 14px;
                margin-right: 26px;
            }
        }
        ${ContainerForLogoHeaderSC}{
                right: 25%;
                margin-top: 30px;
                zoom: 0.7;
                margin-bottom: 40px;
            }
        ${NavigationSC}{
            display: flex;
            flex-direction: column;
            margin-left: 10%;
            height: 40%;
            justify-content: space-between;
            font-size: 14px;

        }
        ${ButtonToConnectToUsSC}{
            position: relative;
            margin-left: 7%;
            background-color: transparent;
            border-radius:6px;
            border: 2px solid #AAAEFF;
            color: #AAAEFF;
            text-shadow: 0px 0px 30px #AAAEFF;
            box-shadow:0px 0px 20px #AAAEFF;
            width: 140px;
            margin-left: 17%;
            top: 84px;
            padding: 10px 10px;
            padding-left: 10px;
            text-decoration: none;
        }
        ${SocialsWrapperSC}{
            position: relative;
            top: 125px;
            left: 10%;

            ${SocialLinkSC} {
                margin-left:45px;
            }

        }
    }
    }
`

//Service 

export const ServiceDivElementSC = styled.div`
    width: 100%;
    height: 186px;
    background-color: #00B4A9;
    box-shadow: 0 0 30px #00B4A9,
    ${props => 
                `${props.topBorder == true ? 'inset 0px 3px 3px 0px rgba(255,255,255,0.25)' : 'inset 0px 0px 3px 0px rgba(255,255,255,0.25)'},
                ${props.bottomBorder == true ? 'inset 0px -3px 3px 0px rgba(255,255,255,0.25)' : 'inset 0px 0px 3px 0px rgba(255,255,255,0.25)'},
                ${props.position == 'right' ? 'inset 3px 0px 3px 0px rgba(255,255,255,0.25)' : 'inset -3px 0px 3px 0px rgba(255,255,255,0.25)'} `} ;
    display: flex;
    flex-direction: row;
    justify-content: ${props => (props.position == 'right')? "flex-start": "flex-end" }; 
    border-right: ${props => (props.position == 'right')? "none": "1px solid #fff "}; 
    border-top: ${props => (props.topBorder == true)? "1px solid #fff":'none '};
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    box-sizing: border-box;
    flex-wrap: wrap;
    overflow: hidden;
    padding-top: 1%;
    z-index:3;
    :hover{
        background-color: #7fd9d4;
    }
    ${media.someForHeader`
    height: 225px;

    `}
                ${media.tablet`
                -ms-grid-columns: 1fr;
                grid-template-columns: repeat(1, 100% [col-start]);
                height: 163px;
                border-right: none;
                border-top: ${props => `${props.bottomBorder == true? " none":'none'}
                                        ${props.topBorder == true? "none":'none'}
                                        ${props.position == 'right'? "none":'none'} `};
                border-top: ${props => (props.bottomFirstBorder == true)? "none":'1px solid #fff'};
                box-shadow: 0 0 30px #00B4A9,
                ${props => 
                `${props.topBorder == true ? 'inset 0px 3px 3px 0px rgba(255,255,255,0.25)' : 'inset 0px -3px 3px 0px rgba(255,255,255,0.25)'},
                ${props.bottomBorder == true ? 'inset 0px -3px 3px 0px rgba(255,255,255,0.25)' : 'inset 0px 0px 3px 0px rgba(255,255,255,0.25)'},
                ${props.position == 'right' ? 'inset 0px 3px 3px 0px rgba(255,255,255,0.25)' : 'inset 0px 0px 3px 0px rgba(255,255,255,0.25)'} `} ;
                justify-content: ${props => (props.position == 'right')? "center": "center" }; 
    
                `}
        ${media.phone `
            -ms-grid-columns: 1fr;
            grid-template-columns: repeat(1, 100% [col-start]);
            height: 163px;
            border-right: none;
            border-top: ${props => (props.bottomFirstBorder == true)? "none":'1px solid #fff'};
            box-shadow: 0 0 30px #00B4A9,
            ${props => 
                `${props.topBorder == true ? 'inset 0px 3px 3px 0px rgba(255,255,255,0.25)' : 'inset 0px -3px 3px 0px rgba(255,255,255,0.25)'},
                ${props.bottomBorder == true ? 'inset 0px -3px 3px 0px rgba(255,255,255,0.25)' : 'inset 0px 0px 3px 0px rgba(255,255,255,0.25)'},
                ${props.position == 'right' ? 'inset 0px 3px 3px 0px rgba(255,255,255,0.25)' : 'inset 0px 0px 3px 0px rgba(255,255,255,0.25)'} `} ;
            justify-content: ${props => (props.position == 'right')? "center": "center" }; 
            `
    }

 `



export const NameOfServicesSC = styled.h3`
    font-size: 38px;
    color: #ffffff;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: lighter;
    width: 60%;
    /* height: 40px; */
    position: relative;
    margin-left: ${props => (props.position == 'right')? "140px": "margin-left: 0; margin-right: 30px" };
    
   

 ::before {
        content:  ${props => `url(${props.BGimg})`};
        /* width: 70px;
        height: 70px; */
        position: absolute;
        left: -115px;
        top: -5px;
        zoom: 0.9;
        ${media.phone `
        zoom: 0.8;`}
    }
    ${media.tablet `
    font-size: 28px;
     margin-left: ${props => (props.position == 'right')? "65px": "margin-left: 0; margin-right: -65px" };
    `}
     ${media.phone `
     font-size: 28px;
     margin-left: ${props => (props.position == 'right')? "65px": "margin-left: 0; margin-right: -65px" };
`}
`
export const ServicesListSC = styled.div`
    -ms-grid-area: 'ServicesList';
    grid-area: 'ServicesList';
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(2, 50% [col-start]);
    ${media.tablet `
    -ms-grid-columns:1fr;
     grid-template-columns: repeat(1, 100% [col-start]);

    `}

     ${media.phone `
     -ms-grid-columns: 1fr;
     grid-template-columns: repeat(1, 100% [col-start]);


        `}

`

export const ServisePageDescriptionSC = styled.div`
    -ms-grid-area: 'ProjectSlider';
    grid-area: 'ProjectSlider';
    /* height: 600px; */
    background: ${props => `linear-gradient( rgba(0,19,56,0.6), rgba(0,19,56,0.6)), url('${props.bg}');`}
        ${SliderSircleElementSC} {
            left: -13%;
            top: -51%;
            ${media.someForHeader `
            left: -13%;
            top: -27%;
        `}
            ${media.desktop `
            left: -13%;
            top: -10%;
        `}

            ${media.tablet `
            left: -13%;
            top: 7%;
                `}
            }
        }
            ${media.tablet `
            /* height: 800px; */
        `}

        ${media.phone `
        /* height: 900px; */
            `}

    ${SliderTextContentSC}{
        height: auto;
        ${media.tablet `
            top: 10%;
        `}

        ${media.phone `
        top: 10%;
            `}
            }

    
`
//Projects


export const ProjectSC = styled.div`
    width: 100%;
    height: 365px;
    background: ${props => `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), rgba(255, 255, 255, 0.6) url(${props.BGimg}) no-repeat top center`};
    background-size: cover;
    border: 1px solid #fff;
    box-shadow: 0 0 30px #fff;
    box-sizing: border-box;
    flex-wrap: wrap;
    overflow: hidden;
    position: relative;
        
        ${media.tablet `
        height: 262px;
        `}

        ${media.phone `
        height: 162px;


        `}

    :hover {
        color: #fff;
        background: #FF5577;
        
    }
    :hover a{ 
        color: #fff;
        top: 108px;
    }
    h3{
        font-size: 40px;
        font-family: 'Source Sans Pro',  sans-serif;
        font-weight: lighter;
        position: relative;
        left: ${props => (props.side == 'right')? " 14%": "30%" };
        top: 0;
            ${media.desktop`
            left: ${props => (props.side == 'right')? " 14%": "14%" };
            `}
            ${media.tablet `
            left: ${props => (props.side == 'right')? " 16%": "16%" };
            font-size: 36px;
            `}
            ${media.phone `
            left: ${props => (props.side == 'right')? " 16%": "16%" };
            font-size: 28px;

            `}

    }
    h4{
        text-decoration: none;
        font-size: 18px;
        color: #FF5577;
        text-transform: uppercase;
        text-shadow: 0 0 30px #FF5577;
        position: relative;
        top: 49%;
        font-weight: normal;
        left: ${props => (props.side == 'right')? " 66%": "85%" };

            ${media.desktop `
            left: ${props => (props.side == 'right')? " 66%": "66%" };
            `}

             ${media.tablet `
             font-size: 18px;
            top: 42%;
            left: 76%;
        `}

             ${media.phone `
            
            font-size: 18px;
            top: 23px;
            left: 76%;
            `}
       
    }
    
    ${ProjectSC}:hover h4{ 
        position: absolute;

        color:#fff;
        text-shadow: 0 0 30px #fff;
        top: 77%;
        right: 0%;

            ${media.phone `
            top: 54%;
            `}
    }

`
export const ProjectListSC = styled.div`
    -ms-grid-area: 'ProjectsList';
    grid-area: 'ProjectsList';
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(2, 50% [col-start]);
            ${media.tablet `
            -ms-grid-columns: 1fr;
            grid-template-columns: repeat(1, 100% [col-start]);
            `}
            ${media.phone `
            -ms-grid-columns: 1fr;
            grid-template-columns: repeat(1, 100% [col-start]);
            `}
`

export const HiddenPSC = styled.p`
    display: none;
    margin-left:15%;
    width:75%;
    line-height: 1.8;
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    font-weight: 300;

            ${media.phone `
            margin-top: -20px;
            line-height: 1;
            font-size: 14px;
            width:65%;
            `}

    ${ProjectSC}:hover & {
        color: #fff;
        display: block;
            ${media.phone `
            display: none;
            `}
    }
`



export const ProjectInfoSC = styled.div`
 


`


export const ProjectInfoWrapperSC = styled.div`
width: 100%;
position: relative;
margin-bottom: 250px;
${media.tablet`
left: -12%;
`}
     ${media.phone `
        width: 100%;
        position: relative;
        left: -12%;
        top: 0%;
    `}

a{
    position: absolute;
   bottom: -8%;
    right: 23%;
    text-decoration: none;
    text-transform: uppercase;
    color: #FF5577;
    text-shadow: 0 0 30px #FF5577;
    font-size: 18px;

        ${media.tablet `
        right: -4%;
        `}
        ${media.phone `
        right: -4%;
        `}
}

`
export const ProjectHeadContainerSC = styled.div`
`

export const ProjectInfoContainerSC = styled.div`

width: 100%;
text-align: center;
margin-top: 25px;
margin-bottom: 0px;
position: relative;
    ${media.tablet`
    width: 100%;
        margin-top: 0;
    `} 
     ${media.phone `
        width: 100%;
        margin-top: 0;
    `}
p{    

    P{  
        
        margin-left: 31%;
        width: 39%;
        text-align: left;
        font-family: 'Lato', sans-serif;
        font-size: 16px;
        line-height: 1.8;
        margin-bottom: 30px;
        ${media.desktop`
        margin-left: 25%;
        width: 60%;
        `}
            ${media.tablet`
            font-size: 16px;
            width: 65%;
            `} 

            ${media.phone `
            font-size: 14px;
            width: 65%;
            `}
    }
}
    img{
        width: 51%;
        box-shadow: 0 0 35px #AAAEFF;
        ${media.desktop`
        margin-left: 10%;
        width: 69%;
        
        `}
            ${media.tablet`
            margin-left: 22%;
            width: 79%;
            `} 

            ${media.phone `
            
            margin-left: 17%;
            width: 89%;
            `}
        
    }

`

export const ProjectHeaderSC = styled.div`
position: relative;
    width: 100%;
    /* height: 560px; */
    background: ${props => props.src ? `linear-gradient(rgba(155, 55, 255, 0.6), rgba(155, 55, 255, 0.6)), rgba(155, 55, 255, 0.6) url(${props.src})` : '#FF5577'};
    text-align: center;
    background-size: cover;
        /* ${media.someForHeader `
        height: 657px;
        `}
        ${media.desktop `
        height: 657px;
        `}

        ${media.tablet `
        height: 657px;
        `}
        ${media.phone `
        height: 857px;
        `} */
${SliderSircleElementSC}{
    width: 55em;
    z-index: 0;
    border-radius: 50%;
    height: 55em;
    background: rgba(0,19,56,0.6) no-repeat;
    box-shadow: 0px 0px 25px #fff;
    position: absolute;
    left: -12%;
    top: -60%;
    ${media.someForHeader `
    top: -26%;
    width: 43em;
    height: 43em;

        `}
        ${media.desktop `
        top: -9%;

        `}
    ${media.tablet `
    width: 32em;
    height: 32em;
    left: -11%;
    top: 8%;
    `}

}
    ${ProjectHeadContainerSC}{
        position: relative;
        /* top: 27%; */
        left: 31%;
        width:40%;
        text-align: left;
        padding-top: 150px;
        padding-bottom: 20px;
        ${media.desktop `
        width:60%;
        left: 25%;
        `}
            ${media.tablet `
                /* top: 15%; */
                left: 17%;
                width: 72%;
            `}
            ${media.phone `
                /* top: 15%; */
                left: 17%;
                width: 72%;
            `}

        h1{

        font-family: 'Source Sans Pro', sans-serif;
        font-weight: bold;
        font-size: 40px;
        position: relative;
        margin: 0;
        color: #fff;
        text-shadow: 0 0 30px #fff;
            ${media.tablet `
            font-size: 36px;
            `}
             ${media.phone `
             font-size: 32px;
            `}

        }
        p{
            font-family: 'Lato', sans-serif;
            line-height: 1.8;
            color: #FFF;
            font-size: 16px;
            position: relative;
            margin-top: 80px;
                ${media.tablet `
                margin-top: 20px;
                `}
                ${media.phone `
                margin-top: 20px;
                `}
            
        }
    }


`

//Feedback
export const FeedSircleElementSC = styled.div``
export const FEEDBACKLIST = styled.section`

    background: #FF5577;
    box-shadow: 0 0 30px #FF5577;
    height: 434px;
    width: 100%;
    position: relative;
    color: #fff;
    display: flex;
    justify-content: center;
    flex-wrap:wrap;
        ${media.tablet `  
        height: 521px;
            
            .reviewSlider{

                    .slick-prev{
                    left: 0%;
                    top: 63%;
                    zoom: 0.8;

                    }
                    .slick-next{
                    right: 0%;
                    top: 63%;
                    zoom: 0.8;
                    }

                    }
        `}
         ${media.phone `  
            height: 521px;
            
            .reviewSlider{

                    .slick-prev{
                    left: 0%;
                    top: 63%;
                    zoom: 0.8;

                    }
                    .slick-next{
                    right: 0%;
                    top: 63%;
                    zoom: 0.8;
                    }

                    }

            `}

    h2{
    font-size: 37px;
    color: #AAAEFF;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: bold;
    width: 10%;
    z-index: 3;
    text-shadow: 0 0 25px #AAAEFF;
    position: absolute;
    top: 15%;
    right: 11%;
            ${media.desktop ` 
            font-size: 32px;
            top: 4%;
            right: 10%;
             `}

            ${media.tablet ` 
            font-size: 40px;
            top: 4%;
            right: 27%;
             `}
             ${media.phone `
            font-size: 32px;
            top: 4%;
            right: 34%;
            `}

    }
    ${media.tablet ` 
        ${SliderWrapperSC}{
                        height: 480px;
                    }
     `}
            ${media.phone `
                    ${SliderWrapperSC}{
                        height: 480px;
                    }
            `}

    ${SliderSircleElementSC}{
            display: none;
        }

    ${FeedSircleElementSC}{
        width: 25em;
    z-index: 0;
    border-radius: 50%;
    height: 25em;
    background: rgba(0,19,56,0.6) no-repeat;
    box-shadow: 0px 0px 25px #fff;
    position: absolute;
    right: 3%;
    top: -40%;
                ${media.someForHeader`
                width: 25em;
                height: 25em;
                right: -6%;
                top: -40%;
                `}
                ${media.desktop `
                width: 20em;
                height: 20em;
                right: -11%;
                top: -31%;  `}
                ${media.tablet `
                width: 27em;
                height: 27em;
                left: 47%;
                top: -74px;  `}
             ${media.phone `
                 width: 13em;
                height: 13em;
                left: 47%;
                top: -74px;
                `}
    
    }
    
`


export const FEEDBACK = styled.div`
    width: 60%;
    height: 435px;
    display: flex;
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 100px 56px 1fr;
    align-items: flex-start;
    position: relative;
    top: 100px;
    margin-left: ${props => props.pos == 'left'? '12%': '33%'};
        
        ${media.desktop `
        width: 65%;
        top: 50px;
        `}
        ${media.tablet `
        width: 80%;
        align-items: flex-start;
        position: relative;
        top: 160px;
        margin-left: 17%;
          `}
         ${media.phone `
         width: 80%;
        
        align-items: flex-start;
        position: relative;
        top: 115px;
        margin-left: 17%;`}

    h3{
        font-size: 40px;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: lighter;
    color: #fff;
    margin: 0;
    margin-top: 10px;
            ${media.tablet ` 
            font-size: 28px;
            margin: 0;
     `}
            ${media.phone `
            font-size: 28px;
            margin: 0;
            `}
    }

`

export const FEEDBACKIMG = styled.div`
    background: ${props => props.url ? `url(${props.url}) no-repeat top center` : 'deepskyblue'};
    background-size: cover;
    border-radius: 50%;
    width: 100px;
    height: 100px;
            ${media.tablet ` 
            background: ${props => props.url}; 
            `}
            ${media.phone `
            background: ${props => props.url} ;
           `}

`
export const FEEDBACKTEXT = styled.p`
    width: 100%;
    color: #fff;
    text-align: left;
    line-height: 1.8;
            ${media.tablet ` 
            font-size: 14px; `}
            ${media.phone `
           
            font-size: 14px;
            `}
`



// General styles for SocialIcons
const SocialIconsStyle = css`
    width: 18px;
    height: 18px;
    color: #00B4A9;
    border-radius: 30%;
    box-shadow: 0px 0px 15px 5px rgba(0, 180, 169, .2),inset 1px 1px 30px 15px rgba(0,180,169,0.2); 
`





// Service teplate page

export const SERVICETEMPLATE = styled.section`
    display: -ms-grid;
    -ms-grid-columns: 1fr 1fr;
    -ms-grid-template-rows: auto;
    -ms-grid-template-areas: 
    /* "service description" */
    "projects description";
    display: grid;
    grid-template-columns: repeat(2, 50% [col-start]);
    grid-template-rows: auto;
    grid-template-areas: 
        /* "service description" */
        "projects description";
`

export const SERVICEMAIN = styled.div`
    -ms-grid-area: service;
    grid-area: service;
`
export const SERVICEPROJ = styled.div`
    -ms-grid-area: projects;
    display: -ms-grid;
    -ms-grid-columns: 1fr 1fr 1fr;
    grid-area: projects;
    display: grid;
    grid-template-columns: repeat(3, 33% [col-start]);
`
export const SERVICEDESC = styled.div`
    /* grid-area: description; */
    background: lightgrey;
`

//Footer

export const FooterContainerSC = styled.footer`
    -ms-grid-area: Footer;
    display: -ms-grid;
    -ms-grid-template-columns: 1fr 1fr 1fr;
    -ms-grid-template-rows: 1fr;
    -ms-grid-template-areas: 
        "Logo . Socials";
    grid-area: Footer;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 
        "Logo . Socials";
    width: 100%;
    height: 160px;
    background: linear-gradient( rgba(0,19,56,0.6), rgba(0,19,56,0.6)), url('../../static/footer.jpg');
   background-size: cover;
    background-repeat: no-repeat;

    ${media.phone `
    height: 144px;

    `
    }
   
`
// SVG Icons extends styles
export const FacebookSC = styled(FaFacebookSquare)`
    ${SocialIconsStyle}
    color: ${props => props.color || null};
`
export const LinkedinSC = styled(FaLinkedin)`
    ${SocialIconsStyle}
    color: ${props => props.color || null};
`
export const TelegramSC = styled(FaTelegram)`
    ${SocialIconsStyle}
    color: ${props => props.color || null};
`
export const InstagramSC = styled(FaInstagram)`
    ${SocialIconsStyle}
    color: ${props => props.color || null};
`
export const SuccessSC = styled(FaCheck)`
    ${SocialIconsStyle}
    color: ${props => props.color || null};
`




export const LogoContainerSC = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    padding-right:15%;
    margin-bottom: 55px;

     ${media.phone `
     padding-right:0;
    margin-bottom: 25px;
    zoom: 1.1;

    `}
`
//Who We Are
export const WhoWeAreWrapper = styled.div``


export const WhoWeAreaDescriptionSC = styled.div`
    /* height: 600px; */
    background: linear-gradient( rgba(0,19,56,0.6), rgba(0,19,56,0.6)), url('../../static/WhoWeAreBackgrund.jpg');
    overflow: hidden;
    position: relative;
    background-size: cover;
    /* ${media.tablet `
    height: 900px;
    `}
    ${media.phone `
    height: 1200px;
    `} */


        ${SliderSircleElementSC}{
    width: 47em;
    z-index: 0;
    height: 47em;
    right: -6%;
    top: -31%;

            ${media.desktop `
            width: 39em;
            z-index: 0;
            height: 39em;
            right: -6%;
            top: 0%;

            `}
            ${media.tablet `
            width: 26em;
            z-index: 0;
            height: 27em;
            right: -6%;
            top: 0%;

            `}
         }
${WhoWeAreWrapper}{
    margin-top: 200px;
    margin-bottom: 200px;
    ${media.tablet `
    margin-top: 0px;
    `}
    ${media.phone `
    margin-top: 0px;
    `}

         h1{
    position: relative;
    top: 25%;
    left: 10%;
    font-size: 37px;
    margin-top: 0;
    margin-bottom: 40px;
    color: #AAAEFF;
    text-shadow:  0px 0px 25px #AAAEFF;
        ${media.tablet `
                top: 130px;
                left: 18%;
                font-size: 37px;
                margin-top: 0;
                margin-bottom: 0px;
        `}
           ${media.phone `
                top: 130px;
                left: 18%;
                font-size: 28px;
                margin-top: 0;
                margin-bottom: 0px;
                `}

    }

    P{
        font-size: 16px;
        color: #fff;
        opacity: 0.6;
        z-index:15;
        position: relative;
        top: 30%;
        left: 10%;
        line-height: 1.8;
        width: 80%;
        -webkit-column-count: 2;
        -moz-column-count: 2;
        -webkit-column-count: 2;
        column-count: 2;
        -webkit-column-width: 150px;
        -moz-column-width: 150px;
        -webkit-column-width: 150px;
                ${media.tablet `
                top: 135px;
                left: 17%;
                -webkit-column-count: 1;
                -moz-column-count: 1;
                -webkit-column-count: 1;
                column-count: 1;
                -webkit-column-width: 150px;
                -moz-column-width: 150px;
                -webkit-column-width: 150px;
                width: 70%;
            `}
                    ${media.phone `
                top: 135px;
                left: 17%;
                -webkit-column-count: 1;
                -moz-column-count: 1;
                -webkit-column-count: 1;
                column-count: 1;
                -webkit-column-width: 150px;
                -moz-column-width: 150px;
                -webkit-column-width: 150px;
                width: 70%;
                `}
    }
}
`

export const TeamWrapperSC = styled.div`
    -ms-grid-area: Team;
    display: -ms-grid;
    -ms-grid-columns: 1fr 1fr;
    -ms-grid-template-rows: auto;
    -ms-grid-area: Team;
    display: grid;
    grid-template-columns: repeat(2, 50% [col-start]);
    grid-template-rows: auto;
            ${media.tablet `
            -ms-grid-columns: 1fr;
            grid-template-columns: repeat(1, 100% [col-start]);
            `}
         ${media.phone `
         -ms-grid-columns: 1fr;
         grid-template-columns: repeat(1, 100% [col-start]);
         
         
         `}

`
export const TeamMemberInfoContainerSC= styled.div`
color: #fff;
position: relative;
h4{
    font-size: 30px;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: normal;
    font-style: normal;
    margin: 0;

    ${media.phone `
        
         `}

}
p{
    font-size: 18px;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: normal;
    font-style: normal;
    margin-top: 10px;

    ${media.phone `
             
         `}

}
${SocialLinkSC}{
    position: absolute;
    left: -10%;
    top: 92%;
        svg{
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            -webkit-box-shadow:  0px 0px 15px 5px rgba(255,255,255, .2),
           inset 1px 1px 30px 15px rgba(255,255,255,0.2);
          box-shadow:  0px 0px 15px 5px rgba(255,255,255, .2),
           inset 1px 1px 30px 15px rgba(255,255,255,0.2);
           border-radius: 5px;

        }
        ${media.phone `
         `}
}
`

export const TeamMemberInfo = styled.div`
    width: 100%;
    height: 186px;
    background-color: #AAAEFF;
    display: -ms-grid;
    -ms-grid-template-columns: ${props => (props.position == 'right') ?  '4% 59%' : '42% 58%'};
    -ms-grid-gap: 50px;
    -ms-grid-template-rows: 1;
    display: grid;
    grid-template-columns: ${props => (props.position == 'right') ?  '4% 59%' : '42% 58%'};
    grid-gap: 50px;
    grid-template-rows: 1;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden;
    z-index:3;
    box-shadow: 0 0 30px #AAAEFF,
                ${props => 
                `${props.topBorder == true ? 'inset 0px 3px 3px 0px rgba(255,255,255,0.25)' : 'inset 0px 0px 3px 0px rgba(255,255,255,0.25)'},
                ${props.bottomBorder == true ? 'inset 0px -3px 3px 0px rgba(255,255,255,0.25)' : 'inset 0px 0px 3px 0px rgba(255,255,255,0.25)'},
                ${props.position == 'right' ? 'inset 3px 0px 3px 0px rgba(255,255,255,0.25)' : 'inset -3px 0px 3px 0px rgba(255,255,255,0.25)'} `} ;
    border-top: ${props => (props.topBorder == true)? "1px solid #fff":'none '};
    border-right: ${props => (props.position == 'right')? "none": "1px solid #fff"}; 
            ${media.someForHeader `
            -ms-grid-template-columns: ${props => (props.position == 'right') ?  '0% 43%' : '0% 43%'};
            grid-template-columns: ${props => (props.position == 'right') ?  '0% 43%' : '0% 43%'};
            `}
            ${media.desktop `
            -ms-grid-gap: 20px;
            grid-gap: 20px;
            `}
            ${media.tablet `
            height: 186px;
            -ms-grid-template-columns: ${props => (props.position == 'right') ?  '0% 43%' : '0% 43%'};
            -ms-grid-gap: 10px;
            grid-template-columns: ${props => (props.position == 'right') ?  '0% 43%' : '0% 43%'};
            grid-gap: 10px;
            border-right: ${props => (props.position == 'right')? "none": "none "}; 
            border-top: ${props => (props.bottomFirstElement == true)? "none":'1px solid #fff '};
            box-shadow:0 0 30px #AAAEFF,
                ${props => 
               `${props.topBorder == true ? 'inset 0px 3px 3px 0px rgba(255,255,255,0.25)' : 'inset 0px -3px 3px 0px rgba(255,255,255,0.25)'},
                ${props.bottomBorder == true ? 'inset 0px -3px 3px 0px rgba(255,255,255,0.25)' : 'inset 0px 0px 3px 0px rgba(255,255,255,0.25)'},
                ${props.position == 'right' ? 'inset 0px 3px 3px 0px rgba(255,255,255,0.25)' : 'inset 0px 0px 3px 0px rgba(255,255,255,0.25)'} `} ;
            `}


        ${media.phone `
        height: 162px;
        -ms-grid-template-columns: ${props => (props.position == 'right') ?  '0% 43%' : '0% 43%'};
        -ms-grid-gap: 10px;
        grid-template-columns: ${props => (props.position == 'right') ?  '0% 43%' : '0% 43%'};
        grid-gap: 10px;
        border-right: ${props => (props.position == 'right')? "none": "none "}; 
        /* border-bottom: ${props => (props.bottomFirstElement == true)? "2px solid #fff":'none'}; */
        border-top: ${props => (props.topBorder == true)? "none":'none '};
        border-top: ${props => (props.bottomFirstElement == true)? "none":'1px solid #fff '};
        box-shadow: 0 0 30px #AAAEFF,
                ${props => 
                `${props.topBorder == true ? 'inset 0px 3px 3px 0px rgba(255,255,255,0.25)' : 'inset 0px -3px 3px 0px rgba(255,255,255,0.25)'},
                ${props.bottomBorder == true ? 'inset 0px -3px 3px 0px rgba(255,255,255,0.25)' : 'inset 0px 0px 3px 0px rgba(255,255,255,0.25)'},
                ${props.position == 'right' ? 'inset 0px 3px 3px 0px rgba(255,255,255,0.25)' : 'inset 0px 0px 3px 0px rgba(255,255,255,0.25)'} `} ;
         `}

    img{
        width: 100px;
        height: 100px;
        background-size: cover;
        border-radius: 50%;
        justify-self: flex-end;
        ${media.tablet ``}
            ${media.phone `
            width: 60px;
            height: 60px;
            
            
            `}
    }
`

//Contacts 
export const ContactsWrapperSC = styled.div`
    
    background: url('../../static/BackgrForSlider.jpg');
    background-image: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    width: 100%;
    position: relative;
        ${media.tablet `
        height: 1200px;
        `}

         ${media.phone `
         height: 1180px;
            
            `}


    ${SliderSircleElementSC}{
        left: -11%;
        top: -32%;
        z-index: 1;
        @media(max-width: 1350px){
            left: -20%;
        }
        @media(max-height: 740px){
            
            left: -20%;
            top: -59%;
        }
        ${media.someForHeader `
        left: -18%;
        top: -25%;
        z-index: 1;
        `}
        ${media.desktop `
            display: block;
            height: 36em;
            width: 36em;
            left: -11%;
            top: -4%;
        `}


        ${media.tablet `
            display: block;
            height: 32em;
            width: 32em;
            left: -25%;
            top: -4%;
        `}

        ${media.phone `
            display: block;
            height: 21em;
            width: 21em;
            left: -19%;
            top: -4%;

            `}

       


        }
    }
`
export const ContainerForIconsContactsSC = styled.div`
 position: relative;
 top: -15px;
 left: -20%;
    ${media.tablet `
        top: 2px;
        left: -15%;
        `}

    ${media.phone `
        top: 2px;
        left: 0%;

           `}
    @media(min-width: 1600px){
        left: -27%;
    }
    ${SocialsWrapperSC}{
        margin-bottom: 55px;
        margin-left: -13%;
            

        a{
            margin-left:80px;
            ${media.phone `
            margin-left:53px;

           `}

            svg{
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                box-shadow:  0px 0px 15px 5px rgba(255,255,255,.2),
                inset 1px 1px 30px 15px rgba(255,255,255,0.2);
                -webkit-box-shadow:  0px 0px 15px 5px rgba(255,255,255,.2),
                inset 1px 1px 30px 15px rgba(255,255,255,0.2);
                border-radius: 5px;
                width: 1.5rem;
                height: 1.5rem;
            }
        }
    }
`

export const ContactInfoSC = styled.address`
    z-index: 11;
    position: relative;
    top: 11%;
    left: 10%;
    color: #fff;
    line-height: 1.6;
    width: 40%;
            ${media.tablet `
            top: 6%!important;
            left: 25%;
            width: 70%;
                `}
            ${media.phone `
           top: 6%!important;
            left: 7%;
            width: 70%;
    
            
            `}

    h2{
        font-family: 'Source Sans Pro', sans-serif ;
        font-weight: bold;
        font-style: normal;
        font-size: 40px;
        text-shadow: 0 0 30px #fff;
        ${media.tablet `
        margin-bottom: 40px;
        `}
        ${media.phone `
            margin-bottom: 40px;
        `}
    }
    h3{
        font-family: 'Source Sans Pro', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        span{
                    margin-left: 95px;
                    ${media.desktop`
                    margin-left: 5px;
                    `}
                    ${media.tablet `
                    display: inline-block;
                    margin-left: 0;
                    margin-top: 0px;
                    width: 300px;
                `}
                ${media.phone `
                display: inline-block;
                margin-left: 0;
                margin-top: 0px;
                width: 300px;

                `}

        }
        p{
            margin-top: -35px;
            margin-left: 175px;
            margin-bottom: 37px;
                ${media.tablet `
                margin-left: 0;
                margin-top: 0;
                margin-bottom: 0px;
                `}
                ${media.phone `
                margin-left: 0;
                margin-top: 0;
                margin-bottom: 0px;
                
                `}

        }
    }
    h4 {  
        margin-top:-15px;
        font-family: 'Source Sans Pro', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
                ${media.tablet `
                margin-top:0px;
                `}
                ${media.phone `
                margin-top:0px;
                
                `}

    }
   
 

`

export const ContactsPopUpSC = styled.div`
    position: absolute;
    border: 1px solid rgba(255,255,255, 0.25);
    z-index:1;
    top: 120%;
    background: #AAAEFF;
    width: 360px;
    height: 540px;
    display: ${props => props.hidden ? 'none' : 'flex' };
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0 0 30px #AAAEFF;

            ${media.desktop `
            top: 70px;
            left: 50%;
            margin-left: -180px;
                `}
            ${media.tablet `
            top: 70px;
            left: 50%;
            margin-left: -180px;
                `}
            ${media.phone `
            
            width: 320px;
            left: 50%;
            margin-left: -160px;
            `}
    @media(max-height:601px){
    zoom:0.8;
    }
    @media(max-height:480px){
        zoom:0.75;
    }
    @media(max-height:430px){
        zoom:0.65;
    }
    p{
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 100;
        font-style: normal;
        font-size: 40px;
        color: #fff;
        margin: 25px;
        z-index: 30;
    }


    form{

        position: relative;
        font-family: 'Source Sans Pro', sans-serif;

        input{
            margin-left: 0;
            margin-bottom: 25px;
            width: 260px;
            height: 36px;
            border: none;
            padding-left: 20px;
            border-radius: 5px;
            

        }
        input:hover{
            box-shadow: 0 0 30px #fff;
        }

        Button{
            margin-left: 73%;
            border: none;
            background: transparent;
            color: #FFF;
            font-family: 'Lato', regular;
            font-size: 18px;
            text-transform: uppercase;
            font-weight: normal;
            cursor: pointer;
            ${SuccessSC} {
                width: 33px;
                height: 33px;
                margin-left: 20px;
                color: #fff;
                box-shadow: 0px 0px 15px 5px rgba(255,255,255,.15), inset 1px 1px 30px 15px rgba(255,255,255,0.15)
            }
        }
        Button:hover{
            text-shadow: 0 0 30px #fff;
        }

        textarea {
        height: 90px!important;
        resize: none;
        margin-left: 0;
        margin-bottom: 20px;
        width: 260px;
        border: none;
        padding-top: 15px;
        padding-left: 18px;
        border-radius: 5px;
        font: 400 13.3333px Arial;   
          
    }
        textarea:hover {
            box-shadow: 0 0 30px #fff; 
        }   

        .input-feedback{
            color: #FF5577;
            margin: 0;
            margin-top: -25px;
            margin-bottom: 3px;
            margin-left: 20px;
            font-size: 14px;
            text-shadow: 0 0 10px #FF5577;
        }


    }

`




export const ContainerForElementsContactsSC = styled.div`
    background: #AAAEFF;
    box-shadow: 0 0 30px #AAAEFF;
    position: relative;
    height: 79.4vh;
    top: 45px;
    @media(max-height:1200px){
        height: 79.4vh;
    }
    @media(max-height:881px){
        height: 688px;
    }
    @media(max-height:731px){
        height: 537px;
        ${ContactInfoSC}{
            top: 3%;
        }
    }

        ${media.tablet `
        height: 1160px;
        top: -20px;
        padding-top: 60px;  
        `}
        ${media.phone `
        height: 1150px;
        top: -20px;
        padding-top: 50px;    
            
            `}


    h1{
    position: absolute;
    left: 56%;
    top: 8%;
    font-family: 'Source Sans Pro', sans-serif ;
        font-style: normal;
        font-size: 40px;
        text-shadow: 0 0 30px #fff;
        color: #fff;
        font-weight: bold;
        @media(max-height:731px){
            top: -1%;  
        }
            ${media.someForHeader` 
                position: absolute;
                left: 56%;
                top: 8%;
                @media(max-height:731px){
                top: -1%;  
                }
            `}
            ${media.tablet `
            position: relative;
            left: 25%;
            top: 7%;
            font-size: 40px;
            `}

            ${media.phone `
            left: 7%;
            top: 7%;
            font-size: 32px;
                `}
               
    }
    form{
    position: absolute;
    left: 56%;
    top: 22%;
    width: 360px;
    font-family: 'Source Sans Pro', sans-serif;
        @media(max-height:731px){
       top: 13%;
        }
        ${media.someForHeader` 
                position: absolute;
                left: 56%;
                top: 22%;
                @media(max-height:731px){
                top: 13%;
        }
        `}
        ${media.tablet `
        position: relative;
            left: 25%;
            top: 11%;
            `}
        ${media.phone `
            left: 7%;
            top: 11%;
             `}
            
        input{
            margin-left: 0;
            margin-bottom: 25px;
            width: 260px;
            height: 36px;
            border: none;
            padding-left: 20px;
            border-radius: 5px;
            

        }
        input:hover{
            box-shadow: 0 0 30px #fff;
        }
// что-то не подбирается по Id!
        #forSales{
            height: 100px;
            width: 260px;
        }
        Button{
            margin-left: 56.5%;
            border: none;
            background: transparent;
            color: #FFF;
            font-family: 'Lato', sans-serif;
            font-size: 18px;
            text-transform: uppercase;
            font-weight: normal;
            cursor: pointer;
            
            ${SuccessSC} {
                width: 33px;
                height: 33px;
                margin-left: 20px;
                color: #fff;
                box-shadow: 0px 0px 15px 5px rgba(255,255,255,.15), inset 1px 1px 30px 15px rgba(255,255,255,0.15)
            }
        }
        Button:hover{
            text-shadow: 0 0 30px #fff;
        }

        textarea {
        height: 90px!important;
        resize: none;
        margin-left: 0;
        margin-bottom: 20px;
        width: 260px;
        border: none;
        padding-top: 15px;
        padding-left: 18px;
        border-radius: 5px;
        font: 400 13.3333px Arial;   
          
    }
        textarea:hover {
            box-shadow: 0 0 30px #fff; 
        }   
        .input-feedback{
            color: #FF5577;
            margin: 0;
            margin-top: -25px;
            margin-bottom: 3px;
            margin-left: 20px;
            font-size: 14px;
            text-shadow: 0 0 10px #FF5577;
        }
    }

`

export const ContactsLayoutSC = styled.div`
    
    ${HeaderElement}{
        -ms-grid-template-columns: 300px 1fr  300px;
        -ms-grid-template-rows: 80px;
        grid-template-columns: 300px 1fr  300px;
        grid-template-rows: 80px;
        justify-items: center;
        align-items: center;
            ${media.someForHeader`
            -ms-grid-template-columns: 199px 1fr 179px;
            -ms-grid-gap: 1px;
            grid-template-columns: 199px 1fr 179px;
            grid-gap: 1px;`}
            ${media.desktop`
            -ms-grid-template-columns: 100px 1fr;
            grid-template-columns: 100px 1fr;
            justify-items: flex-end;
            `}
            ${media.tablet `
            -ms-grid-template-columns: 100px 1fr;
            grid-template-columns: 100px 1fr;
            justify-items: flex-end;

            `}
            ${media.phone `
            -ms-grid-template-columns: 100px 1fr;
            grid-template-columns: 100px 1fr;
            justify-items: flex-end;
            -ms-grid-gap: 170px; 
            grid-gap: 170px;  
            
            `}
        ${BurgContainerSC}{
            margin-right: 25px;
        }
        ${ContainerForLogoHeaderSC}{
            ${media.someForHeader`
            right: -6%;
            `}
            ${media.desktop`
            right: -9%;
            `}
            ${media.tablet`
            right: -4%;
            `}
            ${media.phone`
            right: -1%;
            `}

        }
        ${NavigationSC}{
            margin-right: 22.5%;;
            margin-top: 2px;
        }
        ${ContainerLangSwitcherSC}{
            margin-right: 10%;
        }
    }
    ${NavigationMobileSC}{
        ${ContainerForLogoHeaderSC}{
            
            ${media.desktop`
            right: 13%;
            `}
            ${media.tablet`
            right: 12%;
            `}
            ${media.phone`
            right: 25%;
            `}

        }


    }

    ${FooterContainerSC}{
        ${media.tablet `
        
        `}
        ${media.phone `
        height: 160px;`}

    }

`

// IndexPAge/ home Page!!!
export const AboutUsContainerInfoSC = styled.div`
`
export const LineByDivSC = styled.div``

export const ContainerForLogoHeaderHomeSC = styled.div`
    
`
export const LogoHomeContainerSC = styled.div``


export const HeaderHomeElement = styled.header`
    width: 100%;
    max-width: 1920px;
    display: flex;
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: 300px 1fr 190px 300px;
    grid-template-rows: 80px;
    justify-items: center;
    align-items: center;
    background: transparent;
    position: absolute;
    top: 6%;
    font-size: 18px;
    z-index: 100;

        ${media.someForHeader `
        -ms-grid-template-columns: 1fr 465px 190px 1fr;
        grid-template-columns: 1fr 465px 190px 1fr;
        `}
        ${media.desktop`
        -ms-grid-template-columns: 100px 1fr 100px;
        -ms-grid-gap: 1px;
        grid-template-columns: 100px 1fr 100px;
        grid-gap: 1px;
        top: 0%;
        
        `}
        ${media.tablet `
        -ms-grid-template-columns: 100px 1fr 100px;
        -ms-grid-gap: 1px;
        grid-template-columns: 100px 1fr 100px;
        grid-gap: 1px;
        top: 0%;
         
        `}

        ${media.phone `
        -ms-grid-template-columns: 100px 1fr;
        -ms-grid-gap: 160px;
        grid-template-columns: 100px 1fr;
        grid-gap: 160px;
        top: 0%;
         
        `}

${ContainerForLogoHeaderHomeSC}{
    position: relative;
    right: -4%;
    margin-top: 55px;   
            ${media.someForHeader `
            zoom: 0.8;
            right: 0%;
            `}
            ${media.desktop`
            zoom: 0.8;
            right: -4%;
        
            `}

             ${media.tablet `
            zoom: 0.7;
            right: -4%;
            margin-top: 15px;
         
            `}

             ${media.phone `
            zoom: 0.7;
            right: -4%;
            margin-top: 15px;
         
            `}
}
${ButtonToConnectToUsSC}{
    text-decoration: none;

        ${media.desktop`
        display: block;
        margin-left: 70px;
        
        `}

        ${media.tablet `
        display: block;
        margin-left: 70px;

         
        `}

        ${media.phone `
        display: none;
         
        `}
}        
    ${BurgerNavSC}{
        ${NavigationMobileSC}{
            ${ButtonToConnectToUsSC}{
                display: block;
            }
        }    
    }


${ContainerLangSwitcherSC}{
    span{
    font-size: 18px;
    }
}

${LogoHomeContainerSC} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    margin-right: -43%;
    margin-bottom: -60px;
    img{
        -webkit-filter: drop-shadow(0px 0px 10px #AAAEFF);
    }
}

`

export const AboutUsContainerBackgroundSC = styled.div`

width: 100%;
height: 826px;
background: linear-gradient( rgba(0,19,56,0.6), rgba(0,19,56,0.6)), url('../../static/adoutUsBack.png');
background-image: cover;
position: relative;

         ${media.tablet `
         height: 780px;
        `}

         ${media.phone `
         height: 780px;
        `}

    ${AboutUsContainerInfoSC}{
        z-index:2;
        position: relative;
    width: 39%;
    left: 10%;
    top: 42%;
    height: auto;
    line-height: 1.5;
        ${media.desktop `
        top: 29%;
        `}

         ${media.tablet `
         width: 70%;
        left: 7%;
        top: 30%;
        `}

        ${media.phone `
        width: 80%;
        left: 7%;
        top: 21%;
        `}


    h1{
    font-size: 37px;
    margin-top: 0;
    margin-bottom: 0px;
    color: #00B4A9;
    text-shadow:  0px 0px 25px #00B4A9;

        ${media.tablet `
        font-size: 32px;
        `}

        ${media.phone `
            font-size: 32px;
        `}

    }

    P{
        font-size: 16px;
        color: #fff;
        opacity: 0.6;
        z-index:15;
        margin-top: 5px;
        line-height: 1.8;

    }
   
    }
${SocialsWrapperSC}{
    position: absolute;
    right: 10%;
    top: 28%;
    -ms-grid-area: Socials;
    grid-area: Socials;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;

        ${media.tablet `
        display: flex;
        
        `}

        ${media.phone `
        display: none;
        
        `}

    a{
        margin-top: 50px;
    }
}
${SliderSircleElementSC} {
    width: 67em;
    z-index: 0;
    border-radius: 50%;
    height: 67em;
    background: rgba(0,19,56,0.6) no-repeat;
    box-shadow: 0px 0px 25px #fff;
    position: absolute;
    left: -11%;
    top: -42%;
    ${media.someForHeader `
            display: block;
            width: 67em;
            height: 67em;
            left: -22%;
            top: -42%;
    `}
    ${media.desktop `
            display: block;
            width: 48em;
            height: 48em;
            left: -17%;
            top: -13%;
    `}

        ${media.tablet `
            display: block;
            width: 25em;
            height: 25em;
            left: -11%;
            top: -7%;

        `}

        ${media.phone `
        display: block;
        width: 22em;
        height: 22em;
        left: -25%;
        top: -7%;

        `}

}

`


export const AboutUsContainerlinkSC = styled.div`
    width: 79%;
    height: 40px;
    position: absolute;
    bottom: 20%;
    left: 10%;
    z-index:2;

         ${media.tablet `
            bottom: 10%;
        `}

         ${media.phone `
            bottom: 10%;
        `}
    

 ${LineByDivSC} {
    width: 76%;
    position: absolute;
    bottom: 13%;
    left: 0%;
    background: #00B4A9;
    box-shadow: 0 0 30px 1px #00B4A9;
    height: 2px;
        ${media.someForHeader `
        width: 70%;
        `}
         ${media.tablet `
                width: 78%;
                left: -14%;
        `}

        ${media.phone `
                width: 65%;
                left: -14%;
        `}
    }
        
    a{
    text-decoration: none;
    text-transform: uppercase;
    color: #00B4A9;
    text-shadow: 0 0 30px #00B4A9;
    position: absolute;
    right: 12%;
    bottom: -5%;
    cursor: pointer;
        ${media.tablet `
                right: -4%;
        `}

        ${media.phone `
                right: -4%;
        `}
        
    }
`
export const HomeServiceContainerInfoSC = styled.div``

export const MobileServicesListSC = styled.div`
-ms-grid-area: 'MobileServicesListSC';
grid-area: 'MobileServicesListSC';
    width: 100%;
    display: -ms-grid;
    -ms-grid-columns: 1fr;
    display: grid;
    grid-template-columns: repeat(1, 100% [col-start]);
    display: none;
    margin-top: 35px;

           ${SliderWrapperSC}{
            
            .MobServSlider{

                .slick-prev{
            left: 0%;
            top: 32%;
            zoom: 0.8;
      
            }
                .slick-next{
            right: 0%;
            top: 32%;
            zoom: 0.8;
        }

            }

           ${media.tablet `
                height: auto;
            `}
            ${media.phone `
                height: auto;
            `}

                ${SliderSircleElementSC}{
                    display: none;
                }
    }
            ${media.tablet `
                display:block;
            `}
            ${media.phone `
                display:block;
            `}

`


export const HomeServiceContainerBackgroundSC = styled.div`
width: 100%;
height: 1370px;
background: #00B4A9;
position: relative;
text-align: right;
box-shadow: 0 0 29px #00B4A9;
    ${media.desktop `
    height: 1430px;
    box-shadow: 0 0 30px #00B4A9;
    `}   
     ${media.tablet `
    height: auto;
    box-shadow: 0 0 30px #00B4A9;
    `}   


    ${media.phone `
    height: auto;
    box-shadow: 0 0 30px #00B4A9;
    `}

    ${HomeServiceContainerInfoSC}{
        z-index:2;
        position: relative;
    width: 39%;
    left: 50%;
    top: 6%;
    height: auto;
    line-height: 1.5;

        ${media.tablet `
        width: 85%;
        left: 9%;
        top: 38px;
    `}

        ${media.phone `
        width: 85%;
        left: 9%;
        top: 38px;
    `}

    h1{
    font-size: 37px;
    margin-top: 0;
    margin-bottom: 0px;
    color: #00B4A9;
    text-shadow:  0px 0px 25px #00B4A9;
            ${media.tablet `
            font-size: 36px;
            `}
    ${media.phone `
    font-size: 32px;
    `}

    }

    P{
        font-size: 16px;
        color: #fff;
        opacity: 0.6;
        z-index:15;
        margin-top: 5px;
        line-height: 1.8;

    }
   
    }

${SliderSircleElementSC} {
    width: 51em;
    z-index: 0;
    border-radius: 50%;
    height: 51em;
    background: rgba(0,19,56,0.6) no-repeat;
    box-shadow: 0px 0px 25px #fff;
    position: absolute;
    left: 40%;
    top: -18%;

    @media screen and (min-width: 1550px){
        left: 52%;

    }

    ${media.someForHeader `
            display: block;
            width: 51em;
            height: 51em;
            left: 47%;
            top: -18%;
    `}
    ${media.desktop `
            display: block;
            width: 36em;
            height: 36em;
            left: 50%;
            top: -18%;
    `}


            ${media.tablet `
            display: block;
            width: 26em;
            height: 26em;
            left: 53%;
            top: -130px;

            `}

            ${media.phone `
                display:block;
                width: 18em;
                height: 18em;
                left: 30%;
                top: -130px;
            `}
}



${ServicesListSC}{
    margin-top:9%;

             ${media.tablet `
                display:none;
            `}

             ${media.phone `
                display:none;
            `}

}

`


export const ServiceHomeContainerlinkSC = styled.div``

export const ServiceHomeDivElementSC = styled.div`
    width: 100%;
    height: 330px;
    background: transparent;
    position: relative;
    display: -ms-grid;
    display: grid;
    flex-direction: row;
    justify-content: ${props => (props.position == 'right')? "flex-start": "flex-end" }; 
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    box-sizing: border-box;
    flex-wrap: wrap;
    overflow: hidden;
    padding-top: 1%;
    z-index:3;
    text-align: left;
            ${media.desktop `
            height: 360px;
            `}
            ${media.tablet `
            height: 400px;
            margin-top: 10px;
            justify-content: center;

            `}
            ${media.phone `
            height: 500px;
            margin-top: 10px;

            `}
   
    p{
        position: relative;
        top: -23%;
        width:60%;
        line-height: 1.5;
        margin-left: ${props => (props.position == 'right')? "110px": "margin-left: 0; margin-right: 50px" };
        color: #fff;
        font-size:16px;
        font-family: 'Lato', sans-serif;
            ${media.desktop`
            top: -14%;
            `}

            ${media.tablet `
            width:67%;
            top: -10px;
            margin-bottom: 120px;
            margin-left: 0px;
            margin-right: 0px;

            `}
            ${media.phone `
            width:67%;
            top: -10px;
            margin-bottom: 120px;
            margin-left: 50px;

            `}

    }
    .shortTitle{
        ${media.tablet `
            width:67%;
            top: -25px;
            margin-bottom: 120px;
            margin-left: 0px;
            margin-right: 0px;

            `}
            ${media.phone `
            width:67%;
            top: -25px;
            margin-bottom: 120px;
            margin-left: 50px;

            `}
    }
   ${ServiceHomeContainerlinkSC}{

    width: 79%;
    height: 40px;
    position: absolute;
    bottom: 8%;
    left: 10%;
    z-index:2;
            ${media.tablet `
            bottom: 10%;
             
            `}
            ${media.phone `
            bottom: 10%;
             
            `}
 
 ${LineByDivSC} {
    width:  ${props => (props.position == 'right')? "72%": "103%" };
    position: absolute;
    bottom: 20%;
    left: ${props => (props.position == 'right')? "-12%": "-18%" };
    background: #fff;
    box-shadow: 0 0 10px 1px #fff;
    height: 2px;
            ${media.desktop `
            

           width:  ${props => (props.position == 'right')? "70%": "96%" };
            `}
            ${media.tablet `
            left: -18%;
            width: 83%;
            `}

            ${media.phone `
            left: -18%;
            width: 83%;
            `}

    }
    span{
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
    text-shadow: 0 0 30px #fff;
    font-size: 18px;
    position: absolute;
    right:   ${props => (props.position == 'right')? "21%": "-5%" };
    bottom: -5%;
    cursor: pointer;
            ${media.tablet `
            right: -5%;`}
            ${media.phone `
            right: -5%;
             
            `}
        :hover{
                color: #026761;
                text-shadow: 0 0 50px #fff;
            }
    
    }
 
}
 `
 export const NameOfServicesHomeSC = styled.h3`
 font-size: 37px;
 color: #ffffff;
 font-family: 'Source Sans Pro', sans-serif;
 font-weight: lighter;
 width: 60%;
 /* height: 40px; */
 position: relative;
 margin-left: ${props => (props.position == 'right')? "110px": "margin-left: 0; margin-right: 50px" };
        ${media.someForHeader `
        font-size: 30px;
        `}
        ${media.tablet `
        font-size: 36px;
        margin-right: 11%;
        margin-left: 29%;
        `}
        ${media.phone `
        font-size: 30px;
        margin-right: 11%;
        margin-left: 29%;
        `}

::before {
     content:  ${props => `url(${props.BGimg})`};
     /* width: 70px;
     height: 70px; */
     position: absolute;
     left: -115px;
     zoom: 0.9;
     top: -5px;
            ${media.phone `
            zoom: 0.8;
             
            `}

}

`
export const HomeProjectsContainerInfoSC = styled.div``

export const MobileProjectListSC = styled.div`

 width: 100%;
    display: -ms-grid;
    -ms-grid-columns: 1fr;
    display: grid;
    grid-template-columns: repeat(1, 100% [col-start]);
    display: none;
    margin-top: 35px;

           ${SliderWrapperSC}{
            
            .MobProjSlider{

                    .slick-prev{
                left: 0%;
                top: 20%;
                zoom: 0.8;
        
                }
                    .slick-next{
                right: 0%;
                top: 20%;
                zoom: 0.8;
                }

            }

             ${media.tablet `
                height: auto;
            `}
            ${media.phone `
                height: auto;
            `}

                ${SliderSircleElementSC}{
                    display: none;
                }
            }
            ${media.tablet `
                display:block;
            `}
            ${media.phone `
                display:block;
            `}



`

export const HomeProjectsContainerBackgroundSC = styled.div`
width: 100%;
min-height: 905px;
background: none;
position: relative;
text-align: left;
background: none;
background-size: cover;
background-repeat: no-repeat;
    ${media.tablet `
    height: auto;
    min-height: 775px;
    `}
     ${media.phone `
    height: auto;
    min-height: 875px;
    `}

    ${HomeProjectsContainerInfoSC}{
    z-index:2;
    position: relative;
    width: 39%;
    left: 10%;
    top: 90px;
    height: auto;
    line-height: 1.5;
    margin-bottom: 30px;
        ${media.tablet `
            width: 85%;
            left: 9%;
            top: 38px;
        `}


            ${media.phone `
            width: 85%;
            left: 9%;
            top: 38px;
        `}

    h1{
    font-size: 37px;
    margin-top: 0;
    margin-bottom: 0px;
    color: #FF5577;
    text-shadow:  0px 0px 25px #FF5577;
            ${media.tablet `
            font-size: 36px;
            `}
            ${media.phone `
            font-size: 32px;
            `}
    }

    P{
        font-size: 16px;
        color: #fff;
        opacity: 0.6;
        z-index:15;
        margin-top: 5px;
        line-height: 1.8;
        ${media.phone `
        margin-top: 20px;
        line-height: 1.6;
        `}
    }
   
    }

${SliderSircleElementSC} {
    width: 43em;
    z-index: 0;
    border-radius: 50%;
    height: 43em;
    background: rgba(0,19,56,0.6) no-repeat;
    box-shadow: 0px 0px 25px #fff;
    position: absolute;
    left: -10%;
    top: -5%;

                ${media.desktop `
                width: 32em;
                height: 32em;
                left: -3%;
                `}
                ${media.tablet `
                display: block;
                width: 25em;
                height: 25em;
                left: -13%;
                top: -73px;
            `}
                ${media.phone `
                display: block;
                width: 15em;
                height: 15em;
                left: -13%;
                top: -48px;
            `}
}
${ServicesListSC}{
    margin-top:9%;
}
${ProjectListSC}{
margin-top: 10%;
border-top: 1px solid #FF5577;
            ${media.desktop `
            margin-top: 18%;
            border-top: 1px solid #FF5577;
            `}

            ${media.tablet `
                display:none;
            `}

            ${media.phone `
                display:none;
            `}
}
`
export const ProjectPSC = styled.p``

export const NameOfProjectHomeSC = styled.h3``

export const ProjectHomeDivElementSC = styled.div`
    width: 100%;
    height: 295px;
    background: transparent;
    position: relative;
    border: 1px solid #FF5577;
    border-left: ${props => (props.side == 'right')? "1px solid #FF5577": "none" }; 
    border-right: ${props => (props.side == 'right')? "none": "1px solid #FF5577" }; 
    box-shadow: 0 0 20px 1px #FF5577, 
    inset 0 14px 31px -10px rgba(255, 85, 119, .5);
    margin-left: ${props => (props.side == 'right')? "flex-start": "center" }; 
    box-sizing: border-box;
    padding-top: 1%;
    z-index:3;
    text-align: left;

            ${media.tablet `
            height: 350px;
            margin-top: 10px;
            border: none;
            box-shadow: none;
            `}
            ${media.phone `
            height: 400px;
            margin-top: 10px;
            border: none;
            box-shadow: none;
            `}
    
   ${NameOfProjectHomeSC} {
font-size: 40px;
 color: #ffffff;
 font-family: 'Source Sans Pro', sans-serif;
 font-weight: lighter;
 width: 60%;
 /* height: 40px; */
 position: relative;
 left:${props => (props.side == 'right')? "12%": "33%" };
 margin-top: 25px;

        ${media.desktop `
        left:${props => (props.side == 'right')? "12%": "11%" };
        font-size: 32px;
        `}

        ${media.tablet `
        font-size: 36px;
        margin-right: 0;
        left: 17%;
        `}
      ${media.phone `
        font-size: 28px;
        margin-right: 0;
        left: 17%;
        `}

}
    ${ProjectPSC}{
    display: block;
    margin-left:${props => (props.side == 'right')? "12%": "33%" }; 
    width:62%;
    line-height: 1.8;
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    color: #fff;
    position: relative;
    top: -25px;
            ${media.desktop `
            margin-left:${props => (props.side == 'right')? "12%": "11%" }; 
            line-height: 1.5;
            `}

            ${media.tablet `
            margin-left: 17%;
            top: -5px;
            line-height: 1.8;
            `}
            ${media.phone `
            margin-left: 17%;
            top: -5px;
            line-height: 1.8;
            `}

    }
    
    ${LineByDivSC}{
        display: none;
        width:  83%;
        position: absolute;
        bottom: 20%;
        left: 18%;
        background: #FF5577;
        box-shadow: 0 0 30px 1px #FF5577;
        height: 2px;
        display: none;
            ${media.tablet `
            display: block;
            left: 0%;
            width: 60%;
            bottom: 16%;
            `}
            ${media.phone `
            display: block;
            left: 0%;
            width: 60%;
            bottom: 16%;
            `}

    }

    

    h4{
        text-decoration: none;
        font-size: 18px;
        color: #FF5577;
        text-transform: uppercase;
        text-shadow: 0 0 30px #FF5577;
        cursor: pointer;
        position: absolute;
        bottom: 7%;
        right: ${props => (props.side == 'right')? "28%": "7%" }; 
            ${media.desktop `
            right: ${props => (props.side == 'right')? "7%": "7%" };
            `}
            
            ${media.tablet `
            right: 8%;
            `}
            ${media.phone `
            right: 8%;
            `}


       :hover {
        color:#fff;
        text-shadow: 0 0 30px #fff;
    }

   
    }
`
export const IndexContainerFooterBackSC = styled.div`
 
background: linear-gradient( rgba(0,19,56,0.6), rgba(0,19,56,0.6)), url('../../static/body_back.png');
background-size: cover;
background-repeat: no-repeat;
    

 ${ContactsWrapperSC}{
    background: transparent;
    height: 620px;
    overflow: hidden;
    width: 100%;
    position: relative;
    margin-bottom: 60px;
    
    ${SliderSircleElementSC}{
        display: none;
    }
    ${media.tablet `
    height: 1080px;
    `}
    ${media.phone `
        height: 1080px;
            `}

}

${ContainerForElementsContactsSC} {
    background: transparent;
    box-shadow: none;
    height: 560px; // не менять!
    position: relative;
    top: -15px;
    ${media.tablet` 
        height: 1080px;
        top: -20px;
        padding-top: 17px;  
    `}
        ${media.phone `
        height: 1080px;
        top: -20px;
        padding-top: 17px;    
            
            `}

    h1{
    position: relative;
    left: 56%;
    top: -62%;
    font-family: 'Source Sans Pro-Bold', sans-serif ;
    font-weight: bold;

        font-style: normal;
        font-size: 40px;
        text-shadow: 0 0 30px #AAAEFF;
        color: #AAAEFF;
        ${media.someForHeader` 
            position: absolute;
            left: 56%;
            top: 8%;
        `}
        ${media.tablet` 
            position: relative;
            left: 25%;
            top: 28px;
            font-size: 36px;
        `}
            ${media.phone `
            left: 5%;
            top: 28px;
            font-size: 32px;
                `}

    }
    form{
    position: relative;
    left: 56%;
    top: -58%;
    font-family: 'Source Sans Pro', sans-serif;
        ${media.someForHeader` 
            position: absolute;
            left: 56%;
            top: 30%;
        `}

        ${media.tablet` 
            position: relative;
            left: 25%;
            top: 67px;
        `}
            ${media.phone `
            position: relative;
            left: 6%;
            top: 67px;
             `}

        input{
            margin-left: 0;
            margin-bottom: 25px;
            width: 260px;
            height: 36px;
            border: none;
            padding-left: 20px;
            border-radius: 5px;
            

        }
        input:hover{
            box-shadow: 0 0 30px #fff;
        }

        Button{
            margin-left: 56.5%;
            border: none;
            background: transparent;
            color: #AAAEFF;
            font-family: 'Lato', sans-serif;
            font-size: 18px;
            text-transform: uppercase;
            font-weight: normal;
            cursor: pointer;
            ${SuccessSC} {
                width: 33px;
                height: 33px;
                margin-left: 20px;
                color: #fff;
                box-shadow: 0px 0px 15px 5px rgba(255,255,255,.15), inset 1px 1px 30px 15px rgba(255,255,255,0.15)
            }
        }
        Button:hover{
            text-shadow: 0 0 30px #AAAEFF;
        }

        textarea {
        height: 90px!important;
        resize: none;
        margin-left: 0;
        margin-bottom: 20px;
        width: 260px;
        border: none;
        padding-top: 15px;
        padding-left: 18px;
        border-radius: 5px;
        font: 400 13.3333px Arial;   
          
        }
        textarea:hover {
            box-shadow: 0 0 30px #fff; 
        }   

        .input-feedback{
            color: #FF5577;
            margin: 0;
            margin-top: -25px;
            margin-bottom: 3px;
            font-size: 14px;
            margin-left: 20px;
            text-shadow: 0 0 10px #FF5577;
        }
    }

    ${ContactInfoSC}{
    z-index: 10;
    position: relative;
    top: 11%;
    left: 10%;
    color: #fff;
    line-height: 1.6;
    width: 40%;
    ${media.tablet` 
            top: 15px;
            left: 25%;
            width: 70%;
    `}
             ${media.phone `
            top: 15px;
            left: 6%;
            width: 70%;
            `}

    h2{
        font-family: 'Source Sans Pro', sans-serif ;
        font-style: normal;
        font-size: 40px;
        color: #AAAEFF;
        text-shadow: 0 0 30px #AAAEFF;
        font-weight: bold;
        ${media.tablet` 
            margin-bottom: 40px;
            font-size: 36px;
    `}
            ${media.phone `
            margin-bottom: 40px;
            font-size: 30px;
        `}
    }
    h3{
        font-family: 'Source Sans Pro', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        span{
            margin-left: 95px;
            ${media.desktop`
            margin-left: 5px;
             `}
               
            ${media.tablet` 
                display: inline-block;
                margin-left: 0;
                margin-top: 0px;
                width: 300px;
            `}
                 ${media.phone `
                display: inline-block;
                margin-left: 0;
                margin-top: 0px;
                width: 300px;

                `}
        }
        p{      margin-top: -35px;
                margin-left: 175px;
                margin-bottom: 37px;
                        ${media.tablet` 
                        margin-left: 0;
                        margin-top: 0;
                        margin-bottom: 0px;
            `}
                            ${media.phone `
                        margin-left: 0;
                        margin-top: 0;
                        margin-bottom: 0px;
                        
                        `}
        }
    }
    h4 {  
        margin-top:-15px;
        font-family: 'Source Sans Pro', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        ${media.tablet` 
        margin-top:0px;
    `}
                ${media.phone `
                margin-top:0px;
                
                `}
        }
    }

    ${ContainerForIconsContactsSC}{
    position: relative;
    top: -15px;
    left: -20%;

    ${media.tablet` 
            left: -18%;
            top: 0px;
    `}
            ${media.phone `
            left: 5%;
            top: 0px;
           `}

    ${SocialsWrapperSC}{
        margin-bottom: 55px;
        margin-left: -13%;

            

        a{
            margin-left:80px;
            ${media.tablet` 
            margin-left:62px;
            `}
                 ${media.phone `
                 margin-left:62px;

                    `}
            svg{
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                width: 1.5rem;
                height: 1.5rem;
                color: #AAAEFF!important;
                box-shadow: 0px 0px 15px 5px rgba(170,174,255,.2), inset 1px 1px 30px 15px rgba(170,174,255,.2);
               -webkit-box-shadow: 0px 0px 15px 5px rgba(170,174,255,.2), inset 1px 1px 30px 15px rgba(170,174,255,.2);
               border-radius: 5px;
            }
        }
    }
    }
}

`
export const FooterContainerHomeSC = styled.footer`
    display: flex;
    flex-wrap: wrap;
    grid-area: Footer;
    justify-content: space-between;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 
        "Logo . Socials";
    width: 100%;
    height: 160px;
    background: transparent;
    margin-top: -50px;
        ${media.tablet` 
        margin-top: -60px;
        `}
        ${media.phone `
        margin-top: -80px;
           `}
   
`
export const LineInFooterSC = styled.hr`
 width: 100%;
 color: #AAAEFF;
 box-shadow: 0px 0px 10px 2px rgba(170, 174, 255, 0.5);
 border: 1px solid #AAAEFF;
 margin: 0;
 margin-top: 0px;
 position: absolute;
 max-width: 1920px;
 `




