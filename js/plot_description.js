let square_box = $('.square-box')
let amount_row = 5
let amount_column = 5

function drawSquare() {
    let html_square =" <table> <tbody>"
    for (let row = 0; row < amount_row; row++) {
        html_square += "<tr>";
        for (let column = 0; column <amount_column; column++) {
            let styleTd =''
            switch (row) {
                case 0:
                    if (column==0) {
                        styleTd = 'border-top:none;border-left:none'
                    }else if (column==4) {
                        styleTd = 'border-top:none;border-right:none'        
                    }else{
                        styleTd = 'border-top:none'        
                    }      
                    break;
                case 4:
                    if (column ==0) {
                        styleTd = 'border-buttom:none;border-left:none'
                    }else if (column==4) {
                        styleTd = 'border-buttom:none;border-right:none'        
                    }else{
                        styleTd = 'border-buttom:none'        
                    }             
                    break;
                default:
                    if (column ==0) {
                        styleTd = 'border-left:none'
                    }else if (column==4) {
                        styleTd = 'border-right:none'        
                    }    
                    break;
            }
            
           
            html_square+=`<td  style=${styleTd} ><div class="content_square"></div></td>`        
        }
        html_square += "</tr>";
    } 
    html_square +=`</table> </tbody> <div class="check-note"></div>`
    square_box.html(html_square)

}
let note_list=[
    ['50%','50%'],
    ['20%','20%'],
    ['50%','50%'],
    ['80%','80%'],
]
function setPostionCheckNote(checknote) {
    let check_note = $(`.${checknote}`);
    for (let index = 0; index < check_note.length; index++) {
        const element = check_note[index];
        let check_note_width = $(element)[0].getBoundingClientRect().width/2+"px";
        $(element).css("left",`calc(${note_list[index][0]} - ${check_note_width})`);
        $(element).css("bottom",`calc(${note_list[index][1]} - ${check_note_width})`);
        
    }
    
}
drawSquare()
setPostionCheckNote('check-note')
