let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extensions = [".com", ".net", ".us", ".io"];

pronoun.map((e) => {
        adj.map((x) => {
            noun.map((y) => {
                extensions.map((f) => {
                    console.log(e + x + y + f);
                });  
         });
    });
});