interface Hero {
    name: string;
    skill: string;
}

const capt: Hero = {
    name: 'capt',
    skill: 'shield'
};

// const capt2: Hero = {};

const capt3 = {} as Hero; // 주의해서 사용해야 함
capt3.name = 'capt';
capt3.skill = 'shield';


const a: string | null = 'aa';
if (a) {

}
a!