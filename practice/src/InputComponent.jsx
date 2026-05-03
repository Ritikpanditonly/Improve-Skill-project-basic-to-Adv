// function InpuComponent({ setText }) {
//     function handleChange(e) {
//         setText(e.target.value);
//     }

//     return (
//         <input
//             type="text"
//             placeholder="something write"
//             onChange={handleChange}
//         />
//     );
// }
// export default InpuComponent;



function InputComponent({ setName, setAge }) {
    return (
        <div>
            <input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Age"
                onChange={(e) => setAge(e.target.value)}
            />
        </div>
    );
}

export default InputComponent;