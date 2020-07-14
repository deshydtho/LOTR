import superagent from "superagent";

// done in a try catch format!
export const makeSuperAgentCall = async () => {
  try {
    const response = await superagent.get("v1/character")
      .set('Authorization', 'Bearer IklTtWsa0140YezCksFb')
     
    const data = JSON.parse(response.text)
    
    console.log("Titles FROM SUPER AGENT are: ", data);
  } catch (err) {
    console.error(err);
  }
};
