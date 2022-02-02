function timeConversion(s) {

    s = s.split(':')
    
    if(s[2].includes('AM')){
        if(s[0] == '12'){
            s[0] = '00'   
        }
        s[2] = s[2].replace(/AM/g, '')
        s = s.join(':')
        console.log(s)
    } else{
        
         if(s[0] == '12'){
   
        } else {
        
        s[0] = parseInt(s[0])
        s[0] += 12        
        }

        s[2] = s[2].replace(/PM/g, '')
        s = s.join(':')

        
    }

return s

}
