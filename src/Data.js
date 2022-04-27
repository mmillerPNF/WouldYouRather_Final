// _DATA.js
export const users = [
    {
        id: 'sarahedo',
        name: 'Sarah Edo',
        avatarURL: 'https://icon-library.com/images/free-avatar-icon/free-avatar-icon-10.jpg',
        answers: {
            "8xf0y6ziyjabvozdd253nd": 'optionOne',
            "6ni6ok3ym7mf1p33lnez": 'optionTwo',
            "am8ehyc8byjqgar0jgpub9": 'optionTwo',
            "loxhs1bqm25b708cmbf3g": 'optionTwo'
        },
        questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9'],
        createdQuestions: 2,
        answeredQuestions: 4,
    },
    {
        id: 'tylermcginnis',
        name: 'Tyler McGinnis',
        avatarURL: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Cutout.png',
        answers: {
            "vthrdm985a262al8qx3do": 'optionOne',
            "xj352vofupe1dqz9emx13r": 'optionTwo',
        },
        questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
        createdQuestions: 2,
        answeredQuestions: 2,
    },

    {
        id: 'johndoe',
        name: 'John Doe',
        avatarURL: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
        answers: {
            "xj352vofupe1dqz9emx13r": 'optionOne',
            "vthrdm985a262al8qx3do": 'optionTwo',
            "6ni6ok3ym7mf1p33lnez": 'optionTwo'
        },
        questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
        createdQuestions: 2,
        answeredQuestions: 3,
    }
]

export const questions = [
    {
        id: '8xf0y6ziyjabvozdd253nd',
        author: 'Sarah Edo',
        authorURL: 'https://icon-library.com/images/free-avatar-icon/free-avatar-icon-10.jpg',

        timestamp: 1467166872634,
        optionOne: {
            votes: ['sarahedo'],
            text: 'have horrible short term memory',
        },
        optionTwo: {
            votes: [],
            text: 'have horrible long term memory'
        }
    },
    {
        id: '6ni6ok3ym7mf1p33lnez',
        author: 'John Doe',

        authorURL: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',

        timestamp: 1468479767190,
        optionOne: {
            votes: [],
            text: 'become a superhero',
        },
        optionTwo: {
            votes: ['johndoe', 'sarahedo'],
            text: 'become a supervillain'
        }
    },
    {
        id: 'am8ehyc8byjqgar0jgpub9',
        author: 'Sarah Edo',
        authorURL: 'https://icon-library.com/images/free-avatar-icon/free-avatar-icon-10.jpg',

        timestamp: 1488579767190,
        optionOne: {
            votes: [],
            text: 'be telekinetic',
        },
        optionTwo: {
            votes: ['sarahedo'],
            text: 'be telepathic'
        }
    },
    {
        id: 'loxhs1bqm25b708cmbf3g',
        author: 'Tyler McGinnis',
        authorURL: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Cutout.png',

        timestamp: 1482579767190,
        optionOne: {
            votes: [],
            text: 'be a front-end developer',
        },
        optionTwo: {
            votes: ['sarahedo'],
            text: 'be a back-end developer'
        }
    },
    {
        id: 'vthrdm985a262al8qx3do',
        author: 'Tyler Mcginnis',
        authorURL: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Cutout.png',

        timestamp: 1489579767190,
        optionOne: {
            votes: ['tylermcginnis'],
            text: 'find $50 yourself',
        },
        optionTwo: {
            votes: ['johndoe'],
            text: 'have your best friend find $500'
        }
    },
    {
        id: 'xj352vofupe1dqz9emx13r',
        author: 'John Doe',
        authorURL: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
        timestamp: 1493579767190,
        optionOne: {
            votes: ['johndoe'],
            text: 'write JavaScript',
        },
        optionTwo: {
            votes: ['tylermcginnis'],
            text: 'write Swift'
        }
    },
]

// function generateUID() {
//     return Math.random().toString(36).substring(2, 15) + Math.random()
//         .toString(36).substring(2, 15)
// }

// export function sortByHighestScore () {
//     let QuestionsArray = []
//     let array = []
//     users.map((item) => {
//         QuestionsArray.push(item.answeredQuestions + item.createdQuestions)
//         return QuestionsArray;
//     })
//     let sort = QuestionsArray.sort((a, b) => {
//         if ((a.answeredQuestions + a.createdQuestions) < (b.answeredQuestions + b.createdQuestions)) return 1;
//         if ((a.answeredQuestions + a.createdQuestions) > (b.answeredQuestions + b.createdQuestions)) return -1;
//         return 0;
//     })

//     sort.forEach((score) => {
//         users.map((item) => {
//             console.log(item.answeredQuestions + item.createdQuestions)
//             if (score === item.answeredQuestions + item.createdQuestions) {
//                 array.push(item)
//                 return item
//             }
//         })
//     })

//     return array;
// }

