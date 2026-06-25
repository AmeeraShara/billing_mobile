import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
    elevation: 3,
  },
  backButton: {
    marginBottom: 16,
  },
  backText: {
    fontSize: 16,
    color: '#4A90E2',
    fontWeight: '500',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1A2332',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 16,
  },
  field: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
  },
  required: {
    color: '#EF4444',
  },
  input: {
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: '#1F2937',
  },
  inputError: {
    borderColor: '#EF4444',
    borderWidth: 2,
  },
  addressInput: {
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: '#1F2937',
    minHeight: 100,
    textAlignVertical: 'top',
  },
  errorText: {
    color: '#EF4444',
    fontSize: 12,
    marginTop: 4,
  },
  helperText: {
    color: '#6B7280',
    fontSize: 12,
    marginTop: 4,
  },
  addButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  addButtonDisabled: {
    backgroundColor: '#9CA3AF',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  cancelButton: {
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  cancelButtonText: {
    color: '#6B7280',
    fontSize: 16,
    fontWeight: '500',
  },
  // Test Section Styles
  testSection: {
    marginBottom: 8,
    padding: 12,
    backgroundColor: '#F8F9FA',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  testSectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#495057',
    marginBottom: 8,
  },
  testButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 8,
  },
  // Results Display
  resultsContainer: {
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    minHeight: 80,
    maxHeight: 300,
    borderWidth: 1,
  },
  resultsSuccess: {
    backgroundColor: '#F0FDF4',
    borderColor: '#22C55E',
  },
  resultsError: {
    backgroundColor: '#FEF2F2',
    borderColor: '#EF4444',
  },
  resultsInfo: {
    backgroundColor: '#EFF6FF',
    borderColor: '#3B82F6',
  },
  resultsScroll: {
    maxHeight: 280,
  },
  resultsText: {
    fontSize: 13,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    lineHeight: 18,
  },
  resultsTextSuccess: {
    color: '#166534',
  },
  resultsTextError: {
    color: '#991B1B',
  },
  resultsTextInfo: {
    color: '#1E40AF',
  },
  // Test Buttons
  testButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
  },
  testGetButton: {
    backgroundColor: '#3B82F6',
    marginRight: 4,
  },
  testPostButton: {
    backgroundColor: '#22C55E',
    marginRight: 4,
  },
  testClearButton: {
    backgroundColor: '#6B7280',
    flex: 0.5,
  },
  testButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});