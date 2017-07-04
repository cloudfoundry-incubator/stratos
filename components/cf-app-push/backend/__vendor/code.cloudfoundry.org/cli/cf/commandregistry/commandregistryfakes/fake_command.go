// This file was generated by counterfeiter
package commandregistryfakes

import (
	"sync"

	"code.cloudfoundry.org/cli/cf/commandregistry"
	"code.cloudfoundry.org/cli/cf/flags"
	"code.cloudfoundry.org/cli/cf/requirements"
)

type FakeCommand struct {
	MetaDataStub        func() commandregistry.CommandMetadata
	metaDataMutex       sync.RWMutex
	metaDataArgsForCall []struct{}
	metaDataReturns     struct {
		result1 commandregistry.CommandMetadata
	}
	SetDependencyStub        func(deps commandregistry.Dependency, pluginCall bool) commandregistry.Command
	setDependencyMutex       sync.RWMutex
	setDependencyArgsForCall []struct {
		deps       commandregistry.Dependency
		pluginCall bool
	}
	setDependencyReturns struct {
		result1 commandregistry.Command
	}
	RequirementsStub        func(requirementsFactory requirements.Factory, context flags.FlagContext) ([]requirements.Requirement, error)
	requirementsMutex       sync.RWMutex
	requirementsArgsForCall []struct {
		requirementsFactory requirements.Factory
		context             flags.FlagContext
	}
	requirementsReturns struct {
		result1 []requirements.Requirement
		result2 error
	}
	ExecuteStub        func(context flags.FlagContext) error
	executeMutex       sync.RWMutex
	executeArgsForCall []struct {
		context flags.FlagContext
	}
	executeReturns struct {
		result1 error
	}
	invocations      map[string][][]interface{}
	invocationsMutex sync.RWMutex
}

func (fake *FakeCommand) MetaData() commandregistry.CommandMetadata {
	fake.metaDataMutex.Lock()
	fake.metaDataArgsForCall = append(fake.metaDataArgsForCall, struct{}{})
	fake.recordInvocation("MetaData", []interface{}{})
	fake.metaDataMutex.Unlock()
	if fake.MetaDataStub != nil {
		return fake.MetaDataStub()
	} else {
		return fake.metaDataReturns.result1
	}
}

func (fake *FakeCommand) MetaDataCallCount() int {
	fake.metaDataMutex.RLock()
	defer fake.metaDataMutex.RUnlock()
	return len(fake.metaDataArgsForCall)
}

func (fake *FakeCommand) MetaDataReturns(result1 commandregistry.CommandMetadata) {
	fake.MetaDataStub = nil
	fake.metaDataReturns = struct {
		result1 commandregistry.CommandMetadata
	}{result1}
}

func (fake *FakeCommand) SetDependency(deps commandregistry.Dependency, pluginCall bool) commandregistry.Command {
	fake.setDependencyMutex.Lock()
	fake.setDependencyArgsForCall = append(fake.setDependencyArgsForCall, struct {
		deps       commandregistry.Dependency
		pluginCall bool
	}{deps, pluginCall})
	fake.recordInvocation("SetDependency", []interface{}{deps, pluginCall})
	fake.setDependencyMutex.Unlock()
	if fake.SetDependencyStub != nil {
		return fake.SetDependencyStub(deps, pluginCall)
	} else {
		return fake.setDependencyReturns.result1
	}
}

func (fake *FakeCommand) SetDependencyCallCount() int {
	fake.setDependencyMutex.RLock()
	defer fake.setDependencyMutex.RUnlock()
	return len(fake.setDependencyArgsForCall)
}

func (fake *FakeCommand) SetDependencyArgsForCall(i int) (commandregistry.Dependency, bool) {
	fake.setDependencyMutex.RLock()
	defer fake.setDependencyMutex.RUnlock()
	return fake.setDependencyArgsForCall[i].deps, fake.setDependencyArgsForCall[i].pluginCall
}

func (fake *FakeCommand) SetDependencyReturns(result1 commandregistry.Command) {
	fake.SetDependencyStub = nil
	fake.setDependencyReturns = struct {
		result1 commandregistry.Command
	}{result1}
}

func (fake *FakeCommand) Requirements(requirementsFactory requirements.Factory, context flags.FlagContext) ([]requirements.Requirement, error) {
	fake.requirementsMutex.Lock()
	fake.requirementsArgsForCall = append(fake.requirementsArgsForCall, struct {
		requirementsFactory requirements.Factory
		context             flags.FlagContext
	}{requirementsFactory, context})
	fake.recordInvocation("Requirements", []interface{}{requirementsFactory, context})
	fake.requirementsMutex.Unlock()
	if fake.RequirementsStub != nil {
		return fake.RequirementsStub(requirementsFactory, context)
	} else {
		return fake.requirementsReturns.result1, fake.requirementsReturns.result2
	}
}

func (fake *FakeCommand) RequirementsCallCount() int {
	fake.requirementsMutex.RLock()
	defer fake.requirementsMutex.RUnlock()
	return len(fake.requirementsArgsForCall)
}

func (fake *FakeCommand) RequirementsArgsForCall(i int) (requirements.Factory, flags.FlagContext) {
	fake.requirementsMutex.RLock()
	defer fake.requirementsMutex.RUnlock()
	return fake.requirementsArgsForCall[i].requirementsFactory, fake.requirementsArgsForCall[i].context
}

func (fake *FakeCommand) RequirementsReturns(result1 []requirements.Requirement, result2 error) {
	fake.RequirementsStub = nil
	fake.requirementsReturns = struct {
		result1 []requirements.Requirement
		result2 error
	}{result1, result2}
}

func (fake *FakeCommand) Execute(context flags.FlagContext) error {
	fake.executeMutex.Lock()
	fake.executeArgsForCall = append(fake.executeArgsForCall, struct {
		context flags.FlagContext
	}{context})
	fake.recordInvocation("Execute", []interface{}{context})
	fake.executeMutex.Unlock()
	if fake.ExecuteStub != nil {
		return fake.ExecuteStub(context)
	} else {
		return fake.executeReturns.result1
	}
}

func (fake *FakeCommand) ExecuteCallCount() int {
	fake.executeMutex.RLock()
	defer fake.executeMutex.RUnlock()
	return len(fake.executeArgsForCall)
}

func (fake *FakeCommand) ExecuteArgsForCall(i int) flags.FlagContext {
	fake.executeMutex.RLock()
	defer fake.executeMutex.RUnlock()
	return fake.executeArgsForCall[i].context
}

func (fake *FakeCommand) ExecuteReturns(result1 error) {
	fake.ExecuteStub = nil
	fake.executeReturns = struct {
		result1 error
	}{result1}
}

func (fake *FakeCommand) Invocations() map[string][][]interface{} {
	fake.invocationsMutex.RLock()
	defer fake.invocationsMutex.RUnlock()
	fake.metaDataMutex.RLock()
	defer fake.metaDataMutex.RUnlock()
	fake.setDependencyMutex.RLock()
	defer fake.setDependencyMutex.RUnlock()
	fake.requirementsMutex.RLock()
	defer fake.requirementsMutex.RUnlock()
	fake.executeMutex.RLock()
	defer fake.executeMutex.RUnlock()
	return fake.invocations
}

func (fake *FakeCommand) recordInvocation(key string, args []interface{}) {
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

var _ commandregistry.Command = new(FakeCommand)
