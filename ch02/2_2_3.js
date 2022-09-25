(async () => {
    try {
        const result = await axios.get(`https://www.zerocho.com/api/search/${encodeURIComponent('노드')}`);
        console.log(result);
        console.log(result.data);
    } catch(error){
        console.error(error);
    }
})();

// 받는 쪽 decodeURIComponent('%EB%85%B8%EB%93%9C'); // 노드