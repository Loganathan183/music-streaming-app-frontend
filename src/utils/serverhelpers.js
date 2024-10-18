
import { backendurl } from './config';

export const makeunauthenticatedPOSTrequest = async (route, body) => {
    const response = await fetch(backendurl + route, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    const formattedresponse = await response.json();
    return formattedresponse;
}
export const makeAuthenticatedPOSTrequest = async (route, body) => {
    const token=getToken();

    const response = await fetch(backendurl + route, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(body),
    });
    const formattedresponse = await response.json();
    return formattedresponse;
}

export const makeAuthenticatedGETrequest = async (route) => {
    try {
      const token = getToken(); 
      const response = await fetch(backendurl + route, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });
  
     
      if (!response.ok) {
        const errorMessage = await response.text(); 
        throw new Error(`${response.status} ${response.statusText}: ${errorMessage}`);
      }
  

      const formattedResponse = await response.json();
      return formattedResponse;
  
    } catch (error) {
      console.error('Request failed:', error.message); 
      
      throw error;
    }
  };
  


  const getToken = () => {
    const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
    );
    return token || null; // Return null if no token is found
};

