// This file was generated by counterfeiter
package requirementsfakes

import (
	"sync"

	"code.cloudfoundry.org/cli/cf/models"
	"code.cloudfoundry.org/cli/cf/requirements"
)

type FakeServiceInstanceRequirement struct {
	ExecuteStub        func() error
	executeMutex       sync.RWMutex
	executeArgsForCall []struct{}
	executeReturns     struct {
		result1 error
	}
	GetServiceInstanceStub        func() models.ServiceInstance
	getServiceInstanceMutex       sync.RWMutex
	getServiceInstanceArgsForCall []struct{}
	getServiceInstanceReturns     struct {
		result1 models.ServiceInstance
	}
	invocations      map[string][][]interface{}
	invocationsMutex sync.RWMutex
}

func (fake *FakeServiceInstanceRequirement) Execute() error {
	fake.executeMutex.Lock()
	fake.executeArgsForCall = append(fake.executeArgsForCall, struct{}{})
	fake.recordInvocation("Execute", []interface{}{})
	fake.executeMutex.Unlock()
	if fake.ExecuteStub != nil {
		return fake.ExecuteStub()
	} else {
		return fake.executeReturns.result1
	}
}

func (fake *FakeServiceInstanceRequirement) ExecuteCallCount() int {
	fake.executeMutex.RLock()
	defer fake.executeMutex.RUnlock()
	return len(fake.executeArgsForCall)
}

func (fake *FakeServiceInstanceRequirement) ExecuteReturns(result1 error) {
	fake.ExecuteStub = nil
	fake.executeReturns = struct {
		result1 error
	}{result1}
}

func (fake *FakeServiceInstanceRequirement) GetServiceInstance() models.ServiceInstance {
	fake.getServiceInstanceMutex.Lock()
	fake.getServiceInstanceArgsForCall = append(fake.getServiceInstanceArgsForCall, struct{}{})
	fake.recordInvocation("GetServiceInstance", []interface{}{})
	fake.getServiceInstanceMutex.Unlock()
	if fake.GetServiceInstanceStub != nil {
		return fake.GetServiceInstanceStub()
	} else {
		return fake.getServiceInstanceReturns.result1
	}
}

func (fake *FakeServiceInstanceRequirement) GetServiceInstanceCallCount() int {
	fake.getServiceInstanceMutex.RLock()
	defer fake.getServiceInstanceMutex.RUnlock()
	return len(fake.getServiceInstanceArgsForCall)
}

func (fake *FakeServiceInstanceRequirement) GetServiceInstanceReturns(result1 models.ServiceInstance) {
	fake.GetServiceInstanceStub = nil
	fake.getServiceInstanceReturns = struct {
		result1 models.ServiceInstance
	}{result1}
}

func (fake *FakeServiceInstanceRequirement) Invocations() map[string][][]interface{} {
	fake.invocationsMutex.RLock()
	defer fake.invocationsMutex.RUnlock()
	fake.executeMutex.RLock()
	defer fake.executeMutex.RUnlock()
	fake.getServiceInstanceMutex.RLock()
	defer fake.getServiceInstanceMutex.RUnlock()
	return fake.invocations
}

func (fake *FakeServiceInstanceRequirement) recordInvocation(key string, args []interface{}) {
	fake.invocationsMutex.Lock()
	defer fake.invocationsMutex.Unlock()
	if fake.invocations == nil {
		fake.invocations = map[string][][]interface{}{}
	}
	if fake.invocations[key] == nil {
		fake.invocations[key] = [][]interface{}{}
	}
	fake.invocations[key] = append(fake.invocations[key], args)
}

var _ requirements.ServiceInstanceRequirement = new(FakeServiceInstanceRequirement)
