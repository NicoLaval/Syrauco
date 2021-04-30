import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Title, Button, Input } from 'components/common';
import { isValid } from 'utils';
import { postVersion } from 'api/calls';

const DEFAULT_VERSION = { id: '', title: '' };

const Create = () => {
  const [version, setVersion] = useState(DEFAULT_VERSION);
  const { id, title } = version;
  const { push } = useHistory();

  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <Button
            text="Retour"
            onClick={() => push('/')}
            col={12}
            offset={0}
            disabled={false}
          />
        </div>
        <div className="col-md-8">
          <Title title="Création d'un item" />
        </div>
        <div className="col-md-2">
          <Button
            text="Valider"
            onClick={() => postVersion(version)}
            col={12}
            offset={0}
            disabled={isValid(version)}
          />
        </div>
      </div>
      <Input
        label="Id"
        id="id-create"
        value={id}
        onChange={(e) => setVersion({ ...version, id: e.target.value })}
        col={4}
        placeholder="Saissiez votre id ..."
      />
      <Input
        label="Titre"
        id="title-create"
        value={title}
        onChange={(e) => setVersion({ ...version, title: e.target.value })}
        col={4}
        placeholder="Saissiez votre titre ..."
      />
    </>
  );
};

// Gérer l'état du formulaire title / id

// Common --> ajouter Input

// Ajout de boutons retour et valider
// validation --> désactiver valider si taille id plus petit que 3 et pas de label

export default Create;
