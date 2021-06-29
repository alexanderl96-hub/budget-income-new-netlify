import MapingLogs from './MapingLogs'

export default function Filters({budget}) {
     const value = 5000
    return (
        <div>
            <h1 className="mybank">Bank Account Total: $  {value}</h1>
            <section>
                <table>
                    <tbody>
                        {budget.map((neto, index) =>{ 
                            return  <MapingLogs key={index} neto={neto} index={index} />
                            })}
                    </tbody>
                </table>
            </section>
            
        </div>
    )
}