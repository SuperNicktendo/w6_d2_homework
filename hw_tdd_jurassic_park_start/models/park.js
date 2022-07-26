const Park = function (name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
}

Park.prototype.numberOfDinosaurs = function(){
    return this.dinosaurs.length;
}

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur)
};

Park.prototype.removeDinosaur = function(){
    this.dinosaurs.pop()
};

Park.prototype.dinoWithMostVisitors = function(){
    let mostLiked = 0
    let found;
    for (let i = 0; i < this.dinosaurs.length; i++) {
        dinosaur = this.dinosaurs[i]
        if (dinosaur.guestsAttractedPerDay > mostLiked)
            found = dinosaur
            mostLiked = dinosaur.guestsAttractedPerDay        
    }
    return found
};

Park.prototype.numberOfVisitors = function(){
    let total = 0
    for (const visitor of this.dinosaurs) {
        total += visitor.guestsAttractedPerDay;
    }
    return total
};

Park.prototype.numberOfVisitorsPerYear = function(){
    let total = 0
    for (const visitor of this.dinosaurs){
        total += visitor.guestsAttractedPerDay;
    }
    return total*365;
};

Park.prototype.annualRevenue = function(){
    let total = this.ticketPrice * this.numberOfVisitorsPerYear();
    return total;
}

Park.prototype.findSameSpecies = function(species){
    let sameSpecies = []
    for (const dinosaur of this.dinosaurs){
        if (dinosaur.species === species){
            sameSpecies.push(dinosaur);
        }
    }
    return sameSpecies
};

Park.prototype.removeSpecies = function(species){
    let total = this.dinosaurs.length -= this.findSameSpecies(species).length;
    return total;
}



module.exports = Park;