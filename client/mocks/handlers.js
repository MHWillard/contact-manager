import {rest} from 'msw'

export const handlers = [
    rest.get('/contacts', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({name: "dummyname", email: "dummy@dummyemail.com", number: "555-1234", job: "Test Dummy", status: "Friend", interests: "getting hit, testing vehicles", notes: "Not too bright"},
            {name: "dingo", email: "dingo@dummyemail.com", number: "555-1234", job: "Simple Dingo", status: "Friend", interests: "eating meat", notes: "Animal?"},
            {name: "bill billards", email: "bingo@dummyemail.com", number: "555-1234", job: "Popular Dog From Song", status: "Friend", interests: "singing, spelling, farming", notes: "Bingo is his name-o"},
            {name: "bill billingsley", email: "bingo@dummyemail.com", number: "555-1234", job: "Popular Dog From Song", status: "Friend", interests: "singing, spelling, farming", notes: "Bingo is his name-o"})
        )
    })
]