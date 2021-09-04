import React from 'react'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    margin: '1rem',
    flexBasis: '45%',
    padding: '1.5rem',
    textAlign: 'left',
    color: 'inherit',
    textDecoration: 'none',
    border: '1px solid #eaeaea',
    borderRadius: '10px',
    transition: 'color 0.15s ease, border-color 0.15s ease',
    width: '400px',
  },

};

Modal.setAppElement('#__next')

function FormModal({ lootObject, lootId, checkLoot }) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [id, setId] = React.useState(lootId);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#000';
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleChange(e) {
    e.preventDefault();
    setId(e.target.value);
  }

  return (
    <>
      <p onClick={openModal} className="card-special">
        <h3>Check $LOOT &rarr;</h3>
        <p>Click and provide a $LOOT id to see what's available.</p>
      </p>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="$LOOT Tracker"
      >
        <h3 ref={(_subtitle) => (subtitle = _subtitle)}>Enter $LOOT id</h3>
        <p>Currently querying {id}</p>
        <form>
          <input onChange={handleChange} value={id} className="input" />
          <p>{!lootObject?.realmMinted ? "Realm available ✅" : "Realm not available ❌"}</p>
          <p>{!lootObject?.activityScoreMinted ? "Activity score available ✅" : "Activity not available ❌"}</p>
          <p>{!lootObject?.characterMinted ? "Character available ✅" : "Character not available ❌"}</p>
          <p>{!lootObject?.agldMinted ? "Adventure gold available ✅" : "Adventure gold not available ❌"}</p>
          <div className="button" onClick={() => checkLoot(id)}>Search</div>
        </form>
      </Modal>
      <style jsx>{`
        .card-special {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card-special:hover,
        .card-special:focus,
        .card-special:active {
          color: #0070f3;
          border-color: #0070f3;
          cursor: pointer;
        }

        .card-special h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card-special p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        .input {
          background: #fff;
          border: 1px solid #eaeaea;
          border-radius: 8px;
          color: #222;
          font-size: 16px;
          height: 56px;
          padding: 0px 16px;
          width: 100%;
        }

        .modalTitle {
          font-size: 1.5rem;
        }

        .button {
          align-items: center;
          background: #0070f3;
          border-radius: 10px;
          color: #ffffff;
          cursor: pointer;
          display: flex;
          font-size: 16px;
          font-weight: 500;
          height: 56px;
          justify-content: center;
          margin-top: 20px;
          width: 100%;
        }
      `}</style>
    </>
  )
}

export default FormModal