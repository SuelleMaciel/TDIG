import { StyleSheet } from 'react-native';

export const Cores = {
  primary: 'rgb(174, 0, 255)',
  primaryHover: 'rgb(151, 0, 221)',
  secondary: 'rgb(255, 111, 0)',
  bg: '#f0f2f5',
  bg2: '#ffffff',
  textMain: '#333333',
  textSecondary: '#888888',
  textMuted: '#cbcbcb',
  border: '#dcdde1',
  error: '#e74c3c',
};

export const EstilosGlobais = StyleSheet.create({
  
  appContainer: {
    flex: 1,
    backgroundColor: Cores.bg,
  },

  header: {
    backgroundColor: Cores.primary, 
    width: '100%',
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    maxWidth: 1000,
    alignSelf: 'center',
    width: '100%',
  },
  headerH1: {
    margin: 0,
    fontSize: 40, 
    color: Cores.bg2,
    fontWeight: 'bold',
  },
  navButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderColor: '#ffffff',
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  navButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },

  // MAIN
  mainContent: {
    width: '100%',
    alignItems: 'center',
  },

  feedWrapper: {
    maxWidth: 600,
    width: '100%',
    padding: 20,
    alignSelf: 'center',
  },
  horizontalScroll: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 20,
  },
  woofCard: {
    backgroundColor: Cores.bg2,
    minWidth: 120,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center', 
    marginRight: 20, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: Cores.primary,
  },
  woofPost: {
    flexDirection: 'row',
    backgroundColor: Cores.bg2,
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },
  postImage: {
    width: 120,
    height: 120,
  },
  postContent: {
    padding: 15,
    flex: 1,
  },
  postDescription: {
    color: Cores.textSecondary,
    fontSize: 14, 
    marginTop: 5,
  },

  formPage: {
    flexGrow: 1,
    backgroundColor: Cores.bg,
    justifyContent: 'center',
  },
  formWrapper: {
    backgroundColor: Cores.bg2,
    padding: 40,
    borderRadius: 16,
    width: '90%',
    maxWidth: 500,
    alignSelf: 'center', // margin: auto
    marginVertical: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 5,
  },
  formH2: {
    marginBottom: 5,
    fontSize: 24,
    fontWeight: 'bold',
    color: Cores.textMain,
  },
  formH5: {
    marginBottom: 25,
    color: Cores.textSecondary,
    fontWeight: 'normal',
    fontSize: 16,
  },
  petForm: {
    gap: 20,
  },
  inputContainer: {
    gap: 8,
  },
  label: {
    fontWeight: '600',
    fontSize: 15, // equivalente a 0.95rem
    color: Cores.textMain,
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: Cores.border,
    borderRadius: 8,
    fontSize: 16, // equivalente a 1rem
    backgroundColor: '#fafafa',
    color: Cores.textMain,
  },
  submitButton: {
    backgroundColor: Cores.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: Cores.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 4,
    marginTop: 10,
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 18, // equivalente a 1.1rem
    fontWeight: 'bold',
  }
});