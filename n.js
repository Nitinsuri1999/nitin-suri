*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size:25px;
    
}
.wapper,html,body{
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color:rgb(242, 172, 245);
 
}
.wapper header{
    background-color: rgb(173, 96, 245);
    border-bottom: 5px solid rgb(100, 110, 248);
    display:flex;
    padding: 10px;
    border-radius: 10px;
   
}
.wapper header .myJira{
    margin-right: auto;
    padding-left: 1rem;
    display:flex;
    align-items: center;
    justify-content: center;
    
}
.wapper header .plus{
    background-color: burlywood;
    display:flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 3rem;
    border-radius: 50%;
    height:3rem;
    width: 3rem;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
.wapper header .plus:hover{
    transition: all  ease-in-out 100ms;
    cursor: pointer;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}
.wapper main{
     /* height:80%; */
     background-color: rgb(242, 172, 245);
     display: flex;
     flex-wrap: wrap;
}

.wapper main .box{
    background-color: rgb(27, 241, 224);
    height: 10rem;
    width: 10rem;
    margin:5px;
    border-radius: 10px;
    
}

.wapper main .box:hover{
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}
.box main textarea{
    width: 100%;
    height: 80%;
    background-color: rgb(27, 241, 224);
    
}
.wapper footer{
    margin-top: auto;
    background-color: gray;
    text-align: center;
}
.boxHead{
    display: flex;
    height: 20%;
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid gray;
    
}
.boxHead .but{ 
     background-color: gray;
     border-radius: 50%;
     display: flex;
     align-items: center;
     justify-content: center;
     line-height: 1rem;
     margin-right: 2px;
     height: 30px;
     width: 30px;
     margin: 3px;
     box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
     cursor: pointer;
     
}
.boxHead .but:hover{
    transition: all  ease-in-out 100ms;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}
.boxHead .item-2{
    display: flex;
    margin-left: 3px;
    align-items: center;
    line-height: 20%;
    margin-left: auto;  
}
.boxHead .item-2{
    background-color: greenyellow;
}
.boxHead .item-3{
    background-color: red;
}
.boxHead .item-4{
    background-color: rgb(76, 222, 248);
}
.dialogBox{
    position: fixed;
    height: 100%;
    width: 100%;
    display: none;
    align-items: center;
    justify-content: center;

}
.dialogBox .dialog-box{
    
    height: 500px;
    width: 500px;
    background-color: aqua;
    border-radius: 10%;
    position:absolute;
    
}
.dialogBox .dialog-box header{
    margin:20px;
    padding:10px;
    text-align: center;
    color: white;
    border-radius: 10px;
    background-color: rgb(31, 155, 155);
    
}
.dialogBox .dialog-box  div,
.dialogBox .dialog-box  input,
.dialogBox .dialog-box  div textarea
{
    width: 100%;
    padding:10px;
    border-radius: 10px;
    
}
.dialogBox .dialog-box main{
    margin-top: 20px;
}
.dialogBox .dialog-box .X{
    width:50px;
    height:50px;
    position: absolute;
   top: -10px; right: -10px;
   background-color: gray;
   border-radius: 40%;
}
.dialogBox .dialog-box .ad{
    width:50px;
    height:50px;
    position: absolute;
   top: -10px; left: 0;
   background-color: rgb(142, 255, 119);
   border-radius: 40%;
}
.dialogBox .dialog-box .grn{
    width:50px;
    height:50px;
    position: absolute;
   bottom: -10px; left: 0;
   background-color: rgb(142, 255, 119);
   border-radius: 40%;
   line-height: 50px;
}
.dialogBox .dialog-box .blu{
    width:50px;
    height:50px;
    position: absolute;
   bottom: -10px; left: 9rem;
   background-color: rgb(121, 216, 245);
   border-radius: 40%;
   line-height: 50px;
   
}
.dialogBox .dialog-box .rd{
    width:50px;
    height:50px;
    position: absolute;
   bottom: -10px; right: 0rem;
   background-color: rgb(255, 82, 82);
   border-radius: 40%;
   line-height: 50px;
   
}
