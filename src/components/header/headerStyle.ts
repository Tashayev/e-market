

export const style = {
  header:{
    backgroundColor: '#f6f6f6',
    padding: '10px 20px 10px',
    width: '100%',
    display: 'flex',
    justifyContent: 'end',
    boxSizing: 'border-box',
    position: 'fixed',
    top: '0',
    alignItems: 'center',
    gap: '10px',
    color: '#fff' ,
    zIndex:'200'   
  },
  shopCart:{
    marginRight:'10px',
    position: 'relative'
  },
  span:{
    position: 'absolute',
    borderRadius: '999px',
    padding: '0 6px',
    backgroundColor: 'red',
    fontSize: '14px',
    bottom: '15px',
    right:'-12px'

  }
}as const