import * as React from 'react';
import { connect } from 'react-redux';

import { AppState } from 'store/main-reducer';
import {
  actionGetUsers,
  actionIncrementCount,
  actionSetCount,
  IUser,
} from 'store/modules/example/actions';

interface IProps {
  count: number;
  users: IUser[];
  incrementCount: typeof actionIncrementCount;
  setCount: typeof actionSetCount;
  getUsers: typeof actionGetUsers;
}

// Export presenter for testing
export class ReduxExampleComponent extends React.Component<IProps> {
  componentWillMount() {
    const { getUsers } = this.props;

    getUsers();
  }

  render() {
    const { count, incrementCount, setCount, users } = this.props;

    return (
      <div className='ReduxExample'>
        <h1>Count: {count}</h1>

        <button className='Button' onClick={() => incrementCount()}>
          Increment by 1
        </button>
        <button
          className='Button Button--secondary'
          onClick={() => setCount(0)}
        >
          Set count to 0
        </button>

        <ul className='ReduxExample-list'>
          {users.map((user) => {
            const {
              id,
              name,
              username,
              phone,
            } = user;

            return (
              <li className='ReduxExample-list-item' key={id}>
                <h3>{name}</h3>
                <p>{username} - {phone}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state: AppState) {
  return {
    count: state.exampleState.count,
    users: state.exampleState.users,
  };
}

const dispatchProps = {
  incrementCount: actionIncrementCount,
  setCount: actionSetCount,
  getUsers: actionGetUsers,
};

export const ReduxExample = connect(
  mapStateToProps,
  dispatchProps,
)(ReduxExampleComponent);
