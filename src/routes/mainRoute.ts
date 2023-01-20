import {Router} from 'express';

const mainRoute = Router();

mainRoute.get('/',(req,res) => {
    res.send(`Use http://localhost:1234/GetMyImage?image=yourImageName&&width=yourSize&&height=yourSize 
    to get your desired image with the desired size`);
});

export {mainRoute};