
import { createContext, useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';


const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [auth, _setAuth] = useState();

  // user finished onboarding, movr to separate context e.g. UserSettings?
  const [finishedOnboarding, _setFinishedOnboarding] = useState(false);

  const setAuth = useCallback(
    ({ access_token, refresh_token, roleId, isFirstLogin = false }) => {
      localStorage.setItem([
        ['access_token', access_token],
        ['refresh_token', refresh_token],
        ['roleId', JSON.stringify(roleId)],
      ]);

      _setAuth({ access_token, refresh_token, roleId, isFirstLogin });
    },
    [],
  );

  const setFinishedOnboarding = useCallback(
    finished => {
      localStorage.setItem(
        'finishedOnboarding',
        finished ? 'true' : 'false',
      );
      _setFinishedOnboarding(finished);
    },
    [_setFinishedOnboarding],
  );

  const setAuthKey = useCallback(async (key, value) => {
    localStorage.setItem(key, value);
    _setAuth(prev => ({ ...prev, [key]: value }));
    return value;
  }, []);

  const clearAuth = useCallback(async alert => {
    localStorage.clear(['access_token', 'refresh_token', 'roleId']);
    _setAuth();
    if (alert) {
      alert(alert);
    }
  }, []);

  const loadAuth = useCallback(async () => {
    try {
      const isFinishedOnboarding = await localStorage.getItem(
        'finishedOnboarding',
      );
      _setFinishedOnboarding(isFinishedOnboarding === 'true' ? true : false);

      const access_token = localStorage.getItem('access_token');
      const refresh_token = localStorage.getItem('refresh_token');
      const roleId = localStorage.getItem('roleId');

      if (!access_token || !refresh_token || !roleId) {
        throw 'No auth data';
      }

      _setAuth({ access_token, refresh_token, roleId });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('AUTH: error loading auth from async storage');
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    loadAuth();
  }, [loadAuth]);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        setAuthKey,
        clearAuth,
        finishedOnboarding,
        setFinishedOnboarding,
        loading,
      }}>
      {loading ? (
        // TODO: FIX ME, use splash
        <div>
          Loading
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
