import * as React from "react";

export interface IContactEmailTemplate {
  name: string;
  email: string;
  message: string;
}

export const ContactEmailTemplate: React.FC<Readonly<IContactEmailTemplate>> = ({
  name, email, message
}) => (
    <div>
        <h2>New message from <span style={{
          color: 'green'
        }}>{name}</span></h2>
        <h3>Email: {email}</h3>
        <p>{message}</p>
    </div>
);
