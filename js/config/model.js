import Realm from 'realm';


const Fave = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'string',
    faved_on: 'date',
  }
};

export const realm = new Realm({ schema: [Fave] });


//Query faves
export const queryFaves = () => {
  return realm.objects('Fave').map((fave) => fave.id)
}

//Create faves
export const getFaves = () => realm.objects('Fave');

export const createFave = (id) => {
  realm.write(() => {
    realm.create('Fave', { id: id, faved_on: new Date() })
  })
}



export const deleteFave = (id) => {
  realm.write(() => {

    //Query all Fave Objects
    let fave = realm.objects('Fave');

    //Filter by id
    const removeFave = fave.filtered('id == $0', id);

    //Delete removeFave
   realm.delete(removeFave)

  })
}


