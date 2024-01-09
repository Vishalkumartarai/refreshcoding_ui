import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Work-Sans', sans-serif;
    background-image: url('https://assets-global.website-files.com/62d6fb84ec041f09ae295df5/63bfd25e1fecb5493c907446_Group%2017.png');

}
html{
    font-size:62.5%;
    overflow-x:hidden;
    height:auto;
}
body{
    overflow-x:hidden;
}

::-webkit-scrollbar{
    width:1.5rem;

}
::-webkit-scrollbar-track{
    background-color:rgb(24,24,29);
}
::-webkit-scrollbar-thumb{
    background:#fff;
    border:5px solid transparent;
    border-radius:9px;
    background-clip:content-box;
}
h1{
    color:${({ theme }) => theme.colors.heading};
    font-size:3rem;
    font-weight:75
    0;
    font-family: "Times New Roman", serif; /* Stylish font */
}
h2{
    color:${({ theme }) => theme.colors.heading};
    font-size:2.5rem;
    font-weight:300;
    white-space:normal;
    text-align:center;
    
}
h3{
    color:${({ theme }) => theme.colors.heading};
    font-size:1.6rem;
    
    font-weight:400;
}
p{
    color:${({ theme }) => theme.colors.heading};
    opacity:.7;
    font-size:1.65rem;
    line-height:1.5;
    font-weight:400;
    margin-top:1rem;
    
}
a{
    text-decoration:none;

}
li{
    list-style:none;
}

.container{
    max-width:120rem;
    margin:0 auto;


}
.grid{
    display:grid;
    gap:4rem;

}
.grid-ones-column{
    grid-template-columns: 1fr;
    display:flex;
    justify-content: center;
        flex-direction: column;
        align-items: center;

}
.grid-one-column{
    grid-template-columns: 3fr;
    
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    
}
.grid-two-column{
    grid-template-columns: repeat(2, 1fr);
}
.grid-twos-column{
    grid-template-columns: repeat(2, 1fr);
    gap:20vw;
}
.grid-three-column{
    grid-template-columns:repeat(3, 1fr);
}
.grid-four-column{
    
    grid-template-columns:1fr 1fr 1fr 1fr;
}
.grid-fours-column{
    grid-template-columns:1fr 1fr 1fr 1fr;
}
.grid-fourt-column{
    grid-template-columns:1fr 1.2fr 1fr 0.8fr;
}

input,textarea{
    max-width:50rem;
    color:${({ theme }) => theme.colors.black};
    padding:1.6rem 2.4rem;
    border-radius:20px;
    border:1px solid ${({ theme }) => theme.colors.border};
    // text-transform:uppercase;
    box-shadow:${({ theme }) => theme.colors.shadowSupport};
}
input[type="submit"]{
    max-width:16rem;
    margin-top:2rem;
    background-color:${({ theme }) => theme.colors.btn};
    color:${({ theme }) => theme.colors.white};
    padding:1.4rem 2.2rem;
    border-style:solid;
    border-width:.1rem;
    // text-transform:uppercase;
    font-size:1.8rem;
    cursor:pointer;
}
.common-heading{
    font-size:3.8rem;
    font-weight:600;
    margin-bottom:0;
    text-transform:capitalize;
}
@media(max-width:${({ theme }) => theme.media.tab}){
    h1{
        font-size:3rem;
    }
    h2{
        font-size:3.2rem;
    }
    .container{
        padding:0 2rem;


    }
    p{
        font-size:1.3rem;
    }
    .grid-two-column{
        grid-template-columns: repeat(2, 1fr);
    }
    .grid-three-column{
        grid-template-columns:repeat(3, 1fr);
    }
    .grid-four-column{
        grid-template-columns:1fr 1fr 1fr 1fr;
    }
    .grid-fourt-column{
        grid-template-columns:1fr 1.2fr 1fr 0.8fr;
    }
    .grid-fours-column,{
        
        grid-template-columns:1fr 1fr 1fr 1fr ;

    }

}
@media(max-width:${({ theme }) => theme.media.mobile}){
    p{
        font-size:1.3rem;
    }
    h1{
        font-size:2rem;
    }
    h2{
        font-size:2.1rem;
    }
    html{
        font-size:30%;
    }

    .container{
        padding:0 2rem;
    }
    .grid{
        gap:2rem;

    }
    .grid-one-column{
        grid-template-columns: 1fr;
        
        
    }

    .grid-two-column{
        grid-template-columns: repeat(2, 1fr);
    }
    .grid-three-column{
        grid-template-columns:repeat(3, 1fr);
    }
    .grid-four-column{
        grid-template-columns:1fr 1fr 1fr 1fr;
    }
    .grid-fours-column,{
        
        grid-template-columns:1fr 1fr 1fr 1fr ;

    }
    .grid-fourt-column{
        grid-template-columns:1fr 1fr 1fr 0.8fr;
    }

}
`;
