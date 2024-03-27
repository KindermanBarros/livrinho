import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, fetchBooksThunk } from '../../redux/searchTermSlice';
import { AppDispatch, RootState } from '../../redux/store';
import { Toolbar, Drawer, TextField } from '@mui/material';

interface SearchHeaderProps {
  isVisible: boolean;
}

const SearchHeader = forwardRef((props: SearchHeaderProps, ref) => {
  const { isVisible } = props;
  const dispatch = useDispatch<AppDispatch>();
  const searchTerm = useSelector((state: RootState) => state.searchTerm.value);
  const inputRef = useRef<HTMLInputElement>(null);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(fetchBooksThunk(debouncedSearchTerm));
    }
  }, [debouncedSearchTerm, dispatch]);

  useEffect(() => {
    if (isVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isVisible]);

  useImperativeHandle(ref, () => ({
    focus: () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
  }));

  if (!isVisible) {
    return null;
  }

  return (
    <Drawer
      anchor="bottom"
      open={isVisible}
      ModalProps={{ hideBackdrop: true }}
      sx={{
        background: '#FFFFF',
        zIndex: 0,
        transition: '0.3s',
        boxShadow: 5,
        borderRadius: 1,
        '& .MuiDrawer-paperAnchorBottom': {
          height: '15%',
          borderRadius: 1,
          background: '#FFFFF',
          boxShadow: 5,
        },
      }}
    >
      <Toolbar>
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          inputRef={inputRef}
          sx={{
            transition: '0.3s',
            width: '90%',
            height: '70%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& .MuiOutlinedInput-root': {
              height: '100%',
              width: '100%',
            },
            '& .MuiOutlinedInput-input': {
              height: '100%',
              width: '100%',
            },
            '&:hover': {
              opacity: 0.8,
            },
            '&:focus-within': {
              opacity: 1,
            },
          }}
        />
      </Toolbar>
    </Drawer>
  );
});

export default SearchHeader;
