var baseUrl ="https://629757ee14e756fe3b2dcf70.mockapi.io/person"

function apiGetProducts() {
    return axios({
      url: baseUrl,
      method: "GET",
    });
  }