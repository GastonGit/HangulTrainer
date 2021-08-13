import { createStyles } from '@material-ui/core';

const styles = createStyles({
  label: {
    color: '#ffffff',
    '&.Mui-focused': {
      color: '#ffffff',
    },
    fontSize: 30,
  },
  list: {
    height: '80%',
    width: '80%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    userSelect: 'none',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

export default styles;
