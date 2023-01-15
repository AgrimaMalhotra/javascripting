const isPrime = input =>{
    if (input==0 || input==1)
    {return false;}
    for (let idx=2; idx< Math.sqrt(input);idx+=2)
    {
        if (input%idx === 0){
            return false;
        }
    }
    return true;
}

const isArmstrong = input =>{
    const num=input;
    let sum=0;
    let size=input.toString().length;
    while (input>0){
        let remainder=input%10;
        sum+=Math.pow(remainder, size);
        input=parseInt(input/10);
    }
    if (sum === num){
        return true;
    }
    else {
        return false;
    }
}

input1=153;
input2=17;
console.log(isArmstrong(input1));
console.log(isPrime(input2));

//jest testing
module.exports = {isArmstrong, isPrime};
