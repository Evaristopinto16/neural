class tokengerencoa {
    async modelo(){
        return {
            data: {
                mode1: {
                    id:1,
                    model: "gemin",
                    tokenCost: 0.1
                },
                mode2: {
                    id:2,
                    model: "gemin",
                    tokenCost: 0.2
                }
            }
        }
    }
    async balance(){
        return {
            data: {
                plan1: {
                    id: 1,
                    balance: 200,
                    user_id: 1
                },
                plan2: {
                    id: 2,
                    balance: 200,
                    user_id: 2

                }
            }
        }

    }
    async subscript (){
        return {
            data: {
                sub: {
                    id: 1, 
                    token: 100,
                    user_id: 1
                },
                sub: {
                    id: 2, 
                    token: 100,
                    user_id: 2
                }
            }
        }
    }                  
}

const db = new tokengerencoa()
async function send(text) {
    const token = "ee"
    

    if(text.token === token){
        (await db.subscript()).data.sub.user_id
    }
    
}

async function main() 
{ 
    const infoUser = {
        token: "ee",
        id: 1,
        name:"ever",
        text: "hello",
        
    }    
}