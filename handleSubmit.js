
exports.handleData = async(req,res) => {
    try{
        const { array } = req.body;
        const numbers = array.filter(number => 
            {
                number = parseInt(number)
                return typeof number === 'number' && number % 2 === 0 && !isNaN(number)
            }
        )
        const odd = array.filter(number => {
            number = parseInt(number)
            return typeof number === 'number' && number % 2 !== 0 && !isNaN(number)
        })
        const alphabhets = array.filter(alphabet => {
            const number = parseInt(alphabet)
            if (typeof alphabet === 'string' && isNaN(number)) {
                return true; // Include alphabets
            } else {
                return false; // Exclude non-alphabetic characters
            }
        }).map(alphabet => alphabet.toUpperCase());

        res.status(200).json({
            is_success: true,
            user_id: "Prabhdeep_Singh_04012003",
            email: "prabhdeep1018.be21@chitkara.edu.in",
            roll_number: "2110991018",
            odd_numbers: odd,
            even_numbers: numbers,
            alphabhets: alphabhets
        })
    }catch(err){
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
}