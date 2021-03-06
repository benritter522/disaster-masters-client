
const SingleShelter = (props) => {
    return(
        <div style={{margin: '0 auto', display: 'flex', flexDirection: 'row', borderBottom: '1px solid black', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                <p>
                    <img src="https://res.cloudinary.com/bitingrent/image/upload/v1625070383/safespot/safespot-shelterMarker_awhbaz.png" alt="singleShelterIcon" />
                    {' ' + props.name}
                </p>
                <p>{props.address}</p>  
                <p>{props.city}, {props.state} {props.zip}</p>
                <p style={{fontWeight: 'bold'}}>Capacity: {props.postImpactCapacity === props.evacuationCapacity ? 'SHELTER IS FULL' : props.postImpactCapacity + ' / ' + props.evacuationCapacity}</p>
            </div>
            <div>
                <p>{props.distance ? Math.round(props.distance.value*0.000621371) : '...'} Miles</p>
                <p>Driving: {props.duration ? props.duration.text : '...'}</p>
                <a href={`https://www.google.com/maps/search/?api=1&query=${props.latitude},${props.longitude}`}>View on Google Maps</a>
            </div>
        </div>
    )
}

export default SingleShelter;