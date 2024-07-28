#![no_std]
use soroban_sdk::{contract, contractimpl, Env, String, Map};

#[contract]
pub struct PetitionContract {
  pub petitions: Map<String, u32>, // Map symbol (String) to number of signatures (u32)
}

#[contractimpl]
impl PetitionContract {
  /// Initialize the contract with an empty map for petitions.
  pub fn initialize(env: Env) -> Self {
    let petitions = Map::new();
    Self { petitions }
  }

  /// Add a signature to a petition identified by its symbol.
  /// Returns an error if the symbol is empty.
  pub fn add_signature(env: Env, symbol: String, petitions: &Map<String, u32>) -> Result<(), String> {
    if symbol.is_empty() {
      return Err(String::from("Empty symbol provided"));
    }

    let mut petition_data = petitions.get(&symbol);
    match petition_data {
      Some(mut count) => {
        *count += 1;
        // You'll need to update the actual storage or state based on your implementation
        // This example assumes petitions can be modified directly (replace with actual logic)
        petitions.set(&symbol, *count);
        Ok(())
      }
      None => {
        // You'll need to update the actual storage or state based on your implementation
        // This example assumes new petitions can be added directly (replace with actual logic)
        petitions.set(&symbol, 1);
        Ok(())
      }
    }
  }

  /// Get the number of signatures for a petition identified by its symbol.
  /// Returns an error if the symbol is empty or the petition doesn't exist.
  pub fn get_petition_signatures(env: Env, symbol: String, petitions: &Map<String, u32>) -> Result<u32, String> {
    if symbol.is_empty() {
      return Err(String::from("Empty symbol provided"));
    }

    match petitions.get(&symbol) {
      Some(count) => Ok(*count),
      None => Err(String::from("Petition not found")),
    }
  }
}

#[cfg(test)]
mod tests {
  use super::*;
  use soroban_sdk::testutils::EnvExt;
  use soroban_sdk::Env;

  #[test]
  fn test_initialize() {
    let env = Env::default();
    let contract_id = env.register_contract(None, PetitionContract);

    let instance = PetitionContract::initialize(env.clone());
    assert!(instance.petitions.is_empty());
  }

  #[test]
  fn test_add_signature() {
    let env = Env::default();
    let contract_id = env.register_contract(None, PetitionContract);

    let mut petitions = Map::new();

    // Simulate retrieving petitions from storage (replace with actual logic)
    let instance = PetitionContract { petitions };

    // Add signature for a new petition
    let result = instance.add_signature(env.clone(), String::from("petition1"), &instance.petitions);
    assert!(result.is_ok());

    // Add another signature for the same petition
    let result = instance.add_signature(env.clone(), String::from("petition1"), &instance.petitions);
    assert!(result.is_ok());

    // Check signature count for petition1
    let count = instance.get_petition_signatures(env.clone(), String::from("petition1"), &instance.petitions);
    assert!(count.is_ok());
    assert_eq!(count.unwrap(), 2);

    // Add signature for a non-existent petition
    let result = instance.add_signature(env.clone(), String::from("non-existent"), &instance.petitions);
    assert!(result.is_err());
    assert_eq!(result.err().unwrap(), "Empty symbol provided");
  }

  #[test]
  fn test_get_petition_signatures() {
    let env = Env::default();
    let contract_id = env.register_contract(None, PetitionContract);

    let mut petitions = Map::new();
}
}