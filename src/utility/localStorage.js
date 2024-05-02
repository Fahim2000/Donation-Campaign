const getStoredDonations = () => {
    const storedDonations = localStorage.getItem('donations')
    if(storedDonations){
        return JSON.parse(storedDonations)
    }
    return []
}


const saveDonation = id => {
    const DonationsStored = getStoredDonations()
    const exists = DonationsStored.find(donationId => donationId == id)

    if(!exists){
        DonationsStored.push(id)
        localStorage.setItem('donations',JSON.stringify(DonationsStored))
    }
} 

export {saveDonation,getStoredDonations}