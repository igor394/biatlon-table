export default function TableBody (props) {
    return(
        <tbody>
        {props.array.map((item, i) =>
            <tr key={item['number']}>
                <td>{item['id']}</td>
                <td>{item['number']}</td>
                <td>{item['name']}</td>
                <td><img className="flag" src={item['flag']} alt="img" /> {item['country']}</td>
                <td>{item['miss']}</td>
                <td>{item['timeShoots']}</td>
                <td>{item['time']}</td>
            </tr>)
        }
        </tbody>
    )
}