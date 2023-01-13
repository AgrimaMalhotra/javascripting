const isprime = n =>{
    for (let i=0; i< Math.sqrt(n);i+=2)
    {
        if (n%i === 0){
            console.log('Not Prime.');
            return;
        }
    }
    console.log('Is prime.');
    return;
}
const isarmsrtong = n =>{
    const num=n;
    let sum=0;
    while (n>0){
        let r=n%10;
        sum+=r*r*r;
        n=parseInt(n/10);
    }
    if (sum === num){
        console.log('Is Armstrong');
    }
    else {
        console.log('Not Armstrong');
    }
    return;
}

isarmsrtong(152);
isprime(17);
