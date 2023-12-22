using DeveloperSample.ClassRefactoring;
using System;

namespace DeveloperSample.Container
{
    public class Container
    {
        private readonly Dictionary<Type, Type> resolver = new();
        public void Bind(Type interfaceType, Type implementationType)
        {
            if (interfaceType == null) throw new ArgumentNullException();
            if (implementationType == null) throw new ArgumentNullException();
            resolver[interfaceType=implementationType;
        }

        public T Get<T>() 
        {
            if (!typeof(T).IsInterface)
            {
                throw new ArgumentException($"{typeof(T)} must be an interface.");
            }
            //return (T)Activator.CreateInstance(T);
            if (resolver.TryGetValue(typeof(T), out Type implementationType))
            {
                // Create an instance of the implementation type
                return (T)Activator.CreateInstance(implementationType);
            }

            throw new InvalidOperationException($"No resolver found for {typeof(T)}.");
        }
    }
}